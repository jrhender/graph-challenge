const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

const neo4j = require('neo4j-driver');
const driver = new neo4j.driver("neo4j://localhost:7687", neo4j.auth.basic("neo4j", "test"));

const corsOptions = {
  origin: 'http://localhost:8080'
}

app.get('/', cors(corsOptions), (req, res) => {
  const session = driver.session()
  session
  .run(`MATCH p=(n:Node)<-[:PARENT*]-(m)
        WITH COLLECT(p) AS ps
        CALL apoc.convert.toTree(ps) yield value
        RETURN value`)
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