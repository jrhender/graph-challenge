const neo4j = require('neo4j-driver');

async function main() {
  const driver = neo4j.driver('neo4j://localhost:7687', neo4j.auth.basic('neo4j', 'test'));
  const session = driver.session();

  try {
    await session.run('MATCH (n) DETACH DELETE n;');
    await session
      .writeTransaction((txc) => txc.run(`CREATE (a:Node { name: "A", description: "This is a description of A" }),
                                      (b:Node { name: "B", description: "This is a description of B" }),
                                      (c:Node { name: "C", description: "This is a description of C" }),
                                      (d:Node { name: "D", description: "This is a description of D" }),
                                      (b1:Node { name: "B-1", description: "This is a description of B-1" }),
                                      (b2:Node { name: "B-2", description: "This is a description of B-2" }),
                                      (b3:Node { name: "B-3", description: "This is a description of B-3" }),
                                      (a)<-[:CHILD]-(b),
                                      (a)<-[:CHILD]-(c),
                                      (a)<-[:CHILD]-(d),
                                      (b)<-[:CHILD]-(b1),
                                      (b)<-[:CHILD]-(b2),
                                      (b)<-[:CHILD]-(b3)`));
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
