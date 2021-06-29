import "reflect-metadata";
import { Request, Response } from "express";
import { AppRoutes } from "./routes";

require('dotenv').config();
const express = require('express');

const app = express();

app.use(express.json());

AppRoutes.forEach((route) => {
    app.use(
        route.path,
        (req: Request, res: Response, next: Function) => {
            route
                .action(req, res)
                .then(() => next)
                .catch((err) => next(err));

        }
    )
})

app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`)