const neo4j = require('neo4j-driver');
const { map } = require('rxjs/operators');

const driver = new neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "test"));
var rxSession = driver.rxSession()

rxSession
  .writeTransaction(txc =>
    txc
      .run(`CREATE (a:Node { name: "A", description: "This is a description of A" }),
            (b:Node { name: "B", description: "This is a description of B" }),
            (c:Node { name: "C", description: "This is a description of C" }),
            (d:Node { name: "D", description: "This is a description of D" }),
            (b1:Node { name: "B-1", description: "This is a description of B-1" }),
            (b2:Node { name: "B-2", description: "This is a description of B-2" }),
            (b3:Node { name: "B-3", description: "This is a description of B-3" }),
            (a)-[:PARENT]->(b),
            (a)-[:PARENT]->(c),
            (a)-[:PARENT]->(d),
            (b)-[:PARENT]->(b1),
            (b)-[:PARENT]->(b2),
            (b)-[:PARENT]->(b3)`)
      .records()
      .pipe(map(record => record.get('name')))
  )
  .subscribe({
    next: data => console.log(data),
    complete: () => console.log('write completed'),
    error: error => console.log(error)
  })