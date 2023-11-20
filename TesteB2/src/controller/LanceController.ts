import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../services/LanceServices";

class LanceController{
    constructor(){}
    async createLance(request: Request, response: Response){
        try{
            const lance : Prisma.LanceCreateInput = request.body;
            const newlance = await LanceServices.createLance(lance)
            return response.status(200).json({
                status: 'ok',
                newlance: newlance
            })
        }
        catch(error){
            return response.status(500).json({
                error: error,
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLance(req: Request, res: Response){
        const lance = LanceServices.listLance();

        res.status(200).json({
            status: 'ok',
            lance: lance
        })
    }

    async updateLance(req: Request, res: Response){
        res.send('Update lance');
    }

    async deleteLance(req: Request, res: Response){
        res.send('Delete lance');
    }
}
export default new LanceController;