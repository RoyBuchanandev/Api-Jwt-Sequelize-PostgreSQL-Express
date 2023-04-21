import express from 'express';

const app = express();

// importing routes
import projectsRoutes from './routes/projects.router.js';
import tasksRouter from './routes/task.router.js';


// middlewares
app.use(express.json());


app.use(projectsRoutes);
app.use(tasksRouter);

export default app;
