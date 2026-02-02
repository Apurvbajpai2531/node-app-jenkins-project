const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(bodyParser.json());

// --------------------
// Database Connection
// --------------------
const DATABASE_URL =
  process.env.DATABASE_URL ||
  'postgres://postgres:password@localhost:5432/postgres';

const sequelize = new Sequelize(DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
});

// --------------------
// Retry DB Connection
// --------------------
async function connectWithRetry(retries = 10, delay = 5000) {
  for (let i = 1; i <= retries; i++) {
    try {
      await sequelize.authenticate();
      console.log('✅ Database connected');
      return;
    } catch (err) {
      console.log(`⏳ DB not ready (attempt ${i}/${retries})... retrying`);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  console.error('❌ Could not connect to database after retries');
  process.exit(1);
}

// --------------------
// Task Model
// --------------------
const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

// --------------------
// Routes
// --------------------
app.get('/tasks', async (req, res) => {
  const tasks = await Task.findAll();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = await Task.create(req.body);
  res.json(task);
});

// --------------------
// Start Server
// --------------------
const PORT = 3000;

(async () => {
  await connectWithRetry();
  await sequelize.sync();

  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}/tasks`);
  });
})();

