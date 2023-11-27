import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LanceServices from "../services/LanceService";

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
        const list : string = req.body;
        const lance = LanceServices.listLance(list);

        res.status(200).json({
            status: 'ok',
            lance: lance
        })
    }

    async updateLance(req: Request, res: Response){
        try{
            const lance : Prisma.LanceCreateInput = req.body;
            if(lance.id){
                const updateLance = await LanceServices.updateLance(lance.id ,lance)
                return res.status(200).json({
                    status: 'ok',
                    lance: lance
                })
            }
            else{
                return res.status(200).json({
                    status: 'ok',
                    message: "Não ocorreu nenhuma atualização"
                })
            }
        }
        catch(error){
            return res.status(406).json({
                error: error,
                message: 'Não foi possivel realizar a atualização'
            })
        }
    }

    async deleteLance(req: Request, res: Response){
        try{
            const lance : string = req.body;
            const deleteLance = await LanceServices.deleteLance(lance)
            return res.status(200).json({
                status: 'ok',
                deleteLance: deleteLance
            })
        }
        catch(error){
            return res.status(406).json({
                error: error,
                message: 'Esse lance não exite'
            })
        }
    }
}
export default new LanceController;