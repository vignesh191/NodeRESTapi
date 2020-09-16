const express = require('express')
const app = express()
const port = 5000
const OrientDBClient = require("orientjs").OrientDBClient;

const config = {    //config/auth for orientdb
  host: "localhost",
  db: "demodb",
  user: "admin",
  password: "admin",
  rootUser: "root",
  rootPassword: "rootpassword"
};



const run = async () => {  //run() method that executes everything
  let { client, pool } = await setupDatabase();
  boostrap({ client, pool });
};


const setupDatabase = async () => { //initializing database
  let client = await OrientDBClient.connect({
    host: config.host,
    pool: {
      max: 10
    }
  });

  let exists = await client.existsDatabase({ //checking if the selected db exists
    name: config.db,
    username: config.rootUser,
    password: config.rootPassword
  });

  if (!exists) { //creating the db if it does not exist
    await client.createDatabase({
      name: config.db,
      username: config.rootUser,
      password: config.rootPassword
    });
  }

  let pool = await client.sessions({
    name: config.db,
    username: config.rootUser,
    password: config.rootPassword,
    pool: {
      max: 25
    }
  });

  return { client, pool };
};



const boostrap = ({ client, pool }) => { //http request handling

  app.use(async (req, res, next) => {
    try {
      let session = await pool.acquire();
      res.locals.db = session;
      res.on("finish", async () => {
        await session.close();
      });
      next();
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get("/endpoint", async (req, res) => {
    try {
      let data = await res.locals.db
        .query("select * from Countries where Code = :code", {params: { code: "IN" }})
        .on("data", data => {
            //res.send(data.Name)
            res.json(data)
        })
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })
};

run();


