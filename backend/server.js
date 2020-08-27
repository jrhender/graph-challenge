const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
const dbHost = process.argv[2] // Should be the first command line arg

const neo4j = require('neo4j-driver');
const driver = new neo4j.driver(`neo4j://${dbHost}:7687`, neo4j.auth.basic("neo4j", "test"));

const corsOptions = {
  origin: 'http://localhost:8080'
}

app.get('/', cors(corsOptions), (req, res) => {
  const session = driver.session()
  session
  .run(`MATCH p=(n:Node)<-[:CHILD*]-(m)
        WITH COLLECT(p) AS ps
        CALL apoc.convert.toTree(ps) yield value
        RETURN value`)
  .then(result => {
    let json = JSON.stringify(result.records[0].toObject().value)
    res.json(json)
  })
  .catch(error => {
      console.log(error)
  })
  .then(() => session.close())
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})