<!-- Prisma practice project -->

## Prisma Practice Project

### COMMANDS

npm init

-- Installing typescript
   - npm i typescript ts-node @types/node -D

-- Typescript config file
    - npx tsc --init

-- Installing prisma 
   - npm i prisma
- Initializing Prisma
    - $ npx prisma init --datasource-provider sqlite
- Run a migration and give the migration a name "init"
     - npx prisma migrate dev --name init
- Create a typescript file named "index" from which i run prisma queries
-Execute the index file using  'npx ts-node index.ts'