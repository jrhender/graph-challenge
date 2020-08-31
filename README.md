# Graph Challenge
Displays hard code data from a neo4j db via a VueJs page and Express API

## How to run
1. Install docker (for linux) and docker-compose
2. Run `docker-compose up`. If making changes, run `docker-compose up --build`
3. Run migrations to deploy data to neo4j: `cd backend; npm install; npm run migrate`
4. The frontend should be accessible at `http://localhost:8080`. The backend is at `http://localhost:3000`

## Development
### Frontend
1. Run `cd frontend; npm install; npm run serve`
2. To run unit test: `npm run test:unit`

## Remarks
- Useful article how to use neo4j APOC plugin in with docker: https://medium.com/swlh/deployment-of-neo4j-docker-container-with-apoc-and-graph-algorithms-plugins-bf48226928f4
- Vue has several APIs, which have varying compatibility with TypeScript: https://blog.theodo.com/2019/11/integrate-typescript-with-vue/

## Todo
### Backend
 - Investigate why data persists between container restarts for neo4j
### Frontend
 - Add typescript object/interface for SidebarData
 - Make responsive (e.g. change to bottom bar on thin screen)
