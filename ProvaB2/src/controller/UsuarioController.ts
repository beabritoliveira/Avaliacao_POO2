import { Prisma } from "@prisma/client";
import { Request, Response } from "express";
import UsuarioServices from "../services/UsuarioService";

class UsuarioController{
    constructor(){}
    async createUser(request: Request, response: Response){
        try{
            const user : Prisma.UsuarioCreateInput = request.body;
            const newUser = await UsuarioServices.createUsuario(user)
            return response.status(200).json({
                status: 'ok',
                newUser: newUser
            })
        }
        catch(error){
            return response.status(500).json({
                error: error,
                message: 'Favor inserir os dados no corpo da requisição'
            })
        }

    }

    async listUsers(req: Request, res: Response){
        const users = UsuarioServices.listUsuario();

        res.status(200).json({
            status: 'ok',
            users: users
        })
    }

    async updateUser(req: Request, res: Response){
        try{
            const user : Prisma.UsuarioCreateInput = req.body;
            if(user.id){
                const updateUser = await UsuarioServices.updateUsuario(user.id ,user)
                return res.status(200).json({
                    status: 'ok',
                    user: user
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

    async deleteUser(req: Request, res: Response){
        try{
            const user : string = req.body;
            const deleteUser = await UsuarioServices.deleteUsuario(user)
            return res.status(200).json({
                status: 'ok',
                deleteUser: deleteUser
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
export default new UsuarioController;