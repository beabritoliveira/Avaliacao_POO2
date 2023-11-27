import { Router } from "express";
import LeilaoController from "../controller/LeilaoController";

const LeilaoRoutes = Router();

LeilaoRoutes.get('/leilaos', LeilaoController.listLeilao)

LeilaoRoutes.post('/leilao', LeilaoController.createLeilao);

LeilaoRoutes.put('/leilao', LeilaoController.updateLeilao);

LeilaoRoutes.delete('/leilao', LeilaoController.deleteleilao);

export default LeilaoRoutes;