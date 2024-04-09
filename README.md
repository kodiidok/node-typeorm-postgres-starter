This is a starter project for a Node.js application running an Express.js server. The project is configured with TypeScript. Nodemon is installed and configured for hot-reload. PostgreSQL drivers are installed and ready to be used.

# Install dependencies

run `pnpm i` to install dependencies.

# Environment variables

create a **.env** file in the root of the project. Add `HOST` and `POST` variables to configure the server.

# Connect to PostgreSQL database

Edit the `src/datasource.ts` file to configure the PostgreSQL database connection. The best practice is to load the `username`, `password, `host`, and `database`` from the **.env** file.

```
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "test",
  password: "test",
  database: "test",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
```

# Run the dev server

Run the following script to start the dev server with hot-reload. The server will start on port 3000 by default. (The port and the host can be changed via the **.env** file)
```
nodemon
# by default, server starts on http//:localhost:3000
```