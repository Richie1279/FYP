const express = require('express');
const app = express();
const { Pool } = require('pg');
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  connectionString: 'postgresql://postgres:Crunchynut98*@localhost:5433/smartHaul',
});

app.post('/api/save-journey', async (req, res) => {
  try {
    const { start, end, distance, duration } = req.body;

    const query = `
      INSERT INTO journeys (start_location, end_location, distance, duration)
      VALUES ($1, $2, $3, $4)
    `;
    const values = [start, end, distance, duration];

    await pool.query(query, values);

    res.status(200).json({ message: 'Journey saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving the journey' });
  }
});

// Add this test query function
async function testConnection() {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('PostgreSQL connected successfully:', res.rows[0]);
  } catch (err) {
    console.error('Error connecting to PostgreSQL:', err);
  }
}

// Call the testConnection function when the server starts
testConnection();


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
