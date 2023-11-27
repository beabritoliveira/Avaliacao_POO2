import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import LeilaoServices from "../services/LeilaoService";

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
        try{
            const leilao : Prisma.LeilaoCreateInput = req.body;
            if(leilao.id){
                const updateLance = await LeilaoServices.updateLeilao(leilao.id ,leilao)
                return res.status(200).json({
                    status: 'ok',
                    leilao: leilao
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

    async deleteleilao(req: Request, res: Response){
        try{
            const leilao : string = req.body;
            const deleteLeilao = await LeilaoServices.deleteLeilao(leilao)
            return res.status(200).json({
                status: 'ok',
                deleteLeilao: deleteLeilao
            })
        }
        catch(error){
            return res.status(406).json({
                error: error,
                message: 'Esse usuario não exite'
            })
        }
    }
}
export default new LeilaoController;

