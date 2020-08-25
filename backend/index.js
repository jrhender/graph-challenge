const express = require('express')
const app = express()
const port = 3000

const neo4j = require('neo4j-driver');
const driver = new neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "test"));
var session = driver.session()

app.get('/', (req, res) => {
  session
  .run('MATCH (p:Node)-[r:PARENT]->(c:Node) RETURN p,r,c')
  .then(result => {
    console.log(result.records)
    let json = JSON.stringify(result.records)
    res.json(json)
  })
  .catch(error => {
      console.log(error)
  })
  .then(() => session.close())
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})