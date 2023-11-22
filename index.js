import express from 'express';
import { generateRandomShape } from 'generate-random-shapes';

const app = express();

// Define the range for the parameters outside the request handler
const min = 0;
const max = 10; // assuming you want a range from 0 to 10 for demonstration
const step = 1; // step can be fixed if it refers to increment in the shape generation

app.get('/', (req, res) => {
  // Generate random values for the shape parameters inside the request handler
  const randomMin = Math.floor(Math.random() * (max - min + 1)) + min;
  const randomMax = randomMin + Math.floor(Math.random() * (max - randomMin + 1));
  
  // Generate a random shape for each request
  const shape = generateRandomShape(randomMin, randomMax, step);

  // Send the shape as a response
  res.send(shape);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

