import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors()); // Enable CORS for all routes

app.get('/api/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).send({ error: 'Missing query parameter' });
  }

  try {
    const response = await fetch(`https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
