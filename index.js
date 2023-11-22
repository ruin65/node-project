import express from 'express';
import { generateRandomShape } from 'generate-random-shapes';

const app = express();

app.get('/', (req, res) => {
  const shape = generateRandomShape(0, 5, 1);
  res.send(`Random Shape: ${shape}`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
