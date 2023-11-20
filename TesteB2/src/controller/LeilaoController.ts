import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../services/LeilaoServices";

class LeilaoController{
    constructor(){}
    async createLeilao(request: Request, response: Response){
        try{
            const leilao : Prisma.LeilaoCreateInput = request.body;
            const newleilao = await LeilaoServices.createLeilao(leilao)
            return response.status(200).json({
                status: 'ok',
                newleilao: newleilao
            })
        }
        catch(error){
            return response.status(500).json({
                error: error,
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listLeilao(req: Request, res: Response){
        const leilao = LeilaoServices.listLeilao();

        res.status(200).json({
            status: 'ok',
            leilao: leilao
        })
    }

    async updateLeilao(req: Request, res: Response){
        res.send('Update leilao');
    }

    async deleteleilao(req: Request, res: Response){
        res.send('Delete leilao');
    }
}
export default new LeilaoController;