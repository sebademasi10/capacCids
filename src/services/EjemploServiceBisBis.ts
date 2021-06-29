import { Persona } from "../models/persona";
import { ParsedQs } from "qs";
import { injectable } from "inversify";

@injectable()
export class EjemploServiceBisBis {

    constructor() { }

    public async ejemplo() {
        return "Esto es un ejemplo";
    }

    public async ejemploParams(nombre: string, apellido: string) {
        return `Hola ${nombre} ${apellido} `;
    }

    public async ejemploQParams(nombre: string | ParsedQs | string[] | ParsedQs[] | undefined, apellido: string | ParsedQs | string[] | ParsedQs[] | undefined) {
        return `Hola ${nombre} ${apellido} `;
    }

    public async ejemploPost(persona: Persona) {
        return `Soy ${persona.nombre} ${persona.apellido} y tengo ${persona.edad} años`;
    }
}