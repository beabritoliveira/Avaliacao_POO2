import { Router } from "express";
import LanceController from "../controller/LanceController";

const LanceRoutes = Router();

LanceRoutes.get('/lances', LanceController.listLance)

LanceRoutes.post('/lance', LanceController.createLance);

LanceRoutes.put('/lance', LanceController.updateLance);

LanceRoutes.delete('/lance', LanceController.deleteLance);

export default LanceRoutes;