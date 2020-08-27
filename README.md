# Tree displayer

## How to run
1. Install docker (for linux) and docker-compose
2. Run `docker-compose up`. If making changes, run `docker-compose up --build`
3. Run migrations to deploy data to neo4j: `cd backend; npm run migrate`

## Development
### Frontend
1. Install Vue-cli
2. Run `vue serve`

## Remarks
Useful article how to use neo4j APOC plugin in with docker: https://medium.com/swlh/deployment-of-neo4j-docker-container-with-apoc-and-graph-algorithms-plugins-bf48226928f4

## Todo
### Backend
 - Get node with no children first to then use in tree query
 - Change from neo4j stream API as not really using
 - Investigate why data persists between container restarts for neo4i
### Frontend
 - Add unit tests
 - Fix sidebar text