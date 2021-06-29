import { EjemploController } from "./src/controllers/EjemploController";

export const AppRoutes = [
    {
        path: "/ejemplo",
        method: "get",
        action: EjemploController.ejemploAction
    },
    {
        path: "/ejemploParams/:nombre/:apellido",
        method: "get",
        action: EjemploController.ejemploParams
    },
    {
        path: "/ejemploQparams",
        method: "get",
        action: EjemploController.ejemploQParams
    },
    {
        path: "/ejemploPost",
        method: "post",
        action: EjemploController.ejemploPost
    }
]