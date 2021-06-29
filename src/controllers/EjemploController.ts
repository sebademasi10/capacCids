import { Request, Response } from "express";
import { Persona } from "../models/persona";
import { EjemploServiceBisBis } from "../services/EjemploServiceBisBis";
import EjemploTypes from "../services/interfaces/EjemploTypes";
import container from "../services/inversify.config";

let _ejemploService = container.get<EjemploServiceBisBis>(EjemploTypes.Ejemplo);

async function ejemploAction(req: Request, res: Response) {
    return res.status(201).json(await _ejemploService.ejemplo());
}

async function ejemploParams(req: Request, res: Response) {
    return res.json(await _ejemploService.ejemploParams(req.params.nombre, req.params.apellido));
}

async function ejemploQParams(req: Request, res: Response) {
    return res.json(await _ejemploService.ejemploQParams(req.query.nombre, req.query.apellido));

}

async function ejemploPost(req: Request, res: Response) {
    let persona: Persona = req.body;
    return res.json(await _ejemploService.ejemploPost(persona));
}

export const EjemploController = {
    ejemploAction,
    ejemploParams,
    ejemploQParams,
    ejemploPost
}