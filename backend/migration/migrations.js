const neo4j = require('neo4j-driver');
const nodes = require('./nodes.json');

function generateCREATEquery() {
  const { data } = nodes;
  let nodeCreation = '';
  let relationshipCreation = '';
  data.forEach((node) => {
    const { name, description, parent } = node;
    const neo4jName = name.replace('-', '');
    nodeCreation += `(${neo4jName}:Node { name: "${name}", description: "${description}"}),`;
    if (parent) {
      relationshipCreation += `(${parent})<-[:CHILD]-(${neo4jName}),`;
    }
  });
  return `CREATE ${nodeCreation}${relationshipCreation}`;
}

async function main() {
  const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'test'));
  const session = driver.session();

  try {
    await session.run('MATCH (n) DETACH DELETE n;');
    const CREATEquery = generateCREATEquery();
    await session
      .writeTransaction((txc) => txc.run(CREATEquery));
    const insertedResults = await session.run('MATCH (n) RETURN n');
    console.log(`inserted ${insertedResults.records.length} records`);
  } finally {
    await session.close();
    await driver.close();
  }
}

main()
  .then(() => console.log('migration complete'))
  .catch((error) => console.error(error));
