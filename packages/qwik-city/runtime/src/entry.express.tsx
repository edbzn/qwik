import express from 'express';
import { fileURLToPath } from 'url';
import { join } from 'path';
import cityPlan from '@qwik-city-plan';
import { qwikCity } from '../../middleware/express';
import { render } from './entry.ssr';

const app = express();

app.use(
  qwikCity(render, {
    ...cityPlan,
    staticDir: join(fileURLToPath(import.meta.url), '..', '..', 'dist'),
  })
);

app.listen(3000, () => {
  /* eslint-disable */
  console.log(`http://localhost:3000/`);
});
