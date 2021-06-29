import { Request, Response } from "express";
import { Persona } from "../models/persona";

export class EjemploService {

    constructor() { }

    public async ejemploAction(req: Request, res: Response) {
        return res.json("Esto es un ejemplo");
    }

    public async ejemploParams(req: Request, res: Response) {
        return res.json(`Hola ${req.params.nombre} ${req.params.apellido}`);
    }

    public async ejemploQParams(req: Request, res: Response) {
        return res.json(`Hola ${req.query.nombre} ${req.query.apellido}`)
    }

    public async ejemploPost(req: Request, res: Response) {
        let persona: Persona = req.body;
        return res
            .status(201)
            .json(`Soy ${persona.nombre} ${persona.apellido} tengo ${persona.edad} años`);
    }




}