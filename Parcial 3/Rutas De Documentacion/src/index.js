import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { routerSupers } from './router/supersRouter.js';
import specs from '../Docs/swagger.js';

import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));
app.use('/api-docs-json',(req,res)=>{
  res.json(specs);
});

app.use('/supers', routerSupers)
app.use("/api-specs",(req,res)=>{
  res.setHeader("Content-Type","application/json");
  res.send(specs);
});

app.get('/rapidoc', (req, res) => {
  res.send(`
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <script type="module" src="https://unpkg.com/rapidoc/dist/rapidoc-min.js"></script>
      </head>
      <body>
        <rapi-doc spec-url="/api-docs-json"> </rapi-doc>
      </body>
    </html>`
  )
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});