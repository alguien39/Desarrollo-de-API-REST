import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { routerSupers } from './router/supersRouter.js';
import specs from '../swagger.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(specs));
app.use('/supers', routerSupers)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});