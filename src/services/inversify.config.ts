import { Container } from "inversify";
import { EjemploServiceBisBis } from "./EjemploServiceBisBis";
import EjemploTypes from "./interfaces/EjemploTypes";
import { IEjemploService } from "./interfaces/IEjemploService";


var container = new Container();

container.bind<IEjemploService>(EjemploTypes.Ejemplo).to(EjemploServiceBisBis);

export default container