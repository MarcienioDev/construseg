import express, { Request, Response } from 'express';
import { createServer } from 'http'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

//Testing server
app.get("/health", (req: Request, res: Response) => {
  try {
    res.status(200).send("OK")
  } catch (error) {
    res.status(500).send("Internal Server Error")
  }
});
// Todos API
app.get("/api/v1/todos", (req: Request, res: Response) => {
  res.send("GET todos");
});
//Get todo by id
app.get("/api/v1/todos/:id", (req: Request, res: Response) => {
  res.send("GET todo by id");
});
//Post create todo
app.post("/api/v1/todos", (req: Request, res: Response) => {
  res.send("POST CREATE todo");
});
//Patch update todo id
app.patch("/api/v1/todos/:id", (req: Request, res: Response) => {
  res.send("UPDATE todo by id");
});
//Delete todo id
app.delete("/api/v1/todos/:id", (req: Request, res: Response) => {
  res.send("DELETE todo by id");
});

const server = createServer(app);

// Port
const port = process.env.PORT || 8080;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});