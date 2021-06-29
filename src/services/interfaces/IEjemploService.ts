import { ParsedQs } from "qs";
import { Persona } from "../../models/persona";

export interface IEjemploService {

    ejemplo(): Promise<any>;
    ejemploParams(nombre: string, apellido: string): Promise<any>;
    ejemploQParams(nombre: string | ParsedQs | string[] | ParsedQs[] | undefined, apellido: string | ParsedQs | string[] | ParsedQs[] | undefined): Promise<any>;
    ejemploPost(persona: Persona): Promise<any>;

}