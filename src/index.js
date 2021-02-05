const http = require("http");

const { MongoClient } = require("mongodb");
async function main() {
  // const {MongoClient} = require('mongodb');
  /**
   * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
   * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
   */
  const uri =
    "mongodb+srv://subratkmr:subratkmr@firstcluster.vykj4.mongodb.net/firdtDB?retryWrites=true&w=majority";

  const client = new MongoClient(uri, { useUnifiedTopology: true });
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}
main().catch(console.error);

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();
  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
}

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World!\n");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
