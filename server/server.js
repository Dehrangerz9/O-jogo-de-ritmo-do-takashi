const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

const pool = new Pool({
  connectionString:
    "postgresql://RhythmGameMasterDB_owner:p95FiyKAXtfk@ep-dry-shape-a5zldjyt.us-east-2.aws.neon.tech/RhythmGameMasterDB?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/dados", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM usuario");
    client.release();
    res.send(result.rows);
  } catch (err) {
    console.error("Erro ao exercutar a busca", err);
    res.status(500).send("Erro ao executar a consulta");
  }
});

const porta = process.env.PORT || 3000;
app.listen(porta, () => {
  console.log(`Servidor sendo executado na porta ${porta}`);
});
