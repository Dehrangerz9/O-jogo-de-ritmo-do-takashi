const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();

// Configuração do motor de visualização EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

const pool = new Pool({
  connectionString:
    "postgresql://RhythmGameMasterDB_owner:p95FiyKAXtfk@ep-dry-shape-a5zldjyt.us-east-2.aws.neon.tech/RhythmGameMasterDB?sslmode=require",
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get("/", (req, res) => {
  res.render('index', { title: 'Home', userName: 'Dehrangerz9',userLevel: 10,musicaNome: null }); // Renderizando o template 'index.ejs' com um título
});

app.get("/dados", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM usuario");
    client.release();
    res.send(result.rows);
  } catch (err) {
    console.error("Erro ao executar a busca", err);
    res.status(500).send("Erro ao executar a consulta");
  }
});

const porta = process.env.PORT || 3000;
app.listen(porta, () => {
  console.log(`Servidor sendo executado na porta ${porta}`);
});
