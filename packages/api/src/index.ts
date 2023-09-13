import cors from "@elysiajs/cors";
import { Elysia } from "elysia";

const app = new Elysia().use(cors()).get("/", () => "Hello Elysia").get('/hello',()=>"Hello").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);


export type App = typeof app;