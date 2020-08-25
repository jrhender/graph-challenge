import neo4j from 'neo4j-driver';
const driver = new neo4j.driver("neo4j://localhost:7687", neo4j.auth.driver("neo4j", "test"));
var rxSession = driver.rxSession()
rxSession
  .readTransaction(txc =>
    txc
      .run('MATCH (person:Person) RETURN person.name AS name')
      .records()
      .pipe(map(record => record.get('name')))
  )
  .subscribe({
    next: data => console.log(data),
    complete: () => console.log('completed'),
    error: err => console.log(error)
  })