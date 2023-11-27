import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class UsuarioService{
    constructor(){}

    async listUsuario(id?: string){
        try{
            if(id){
                const usuar = prisma.usuario.findUnique({
                    where: {
                        id: id
                    }
                })
                return usuar;
            }
            const usuars = await prisma.usuario.findMany()
            return usuars;
        }catch(error){
            return null;
        }
    }

    async createUsuario(usuario: Prisma.UsuarioCreateInput){
        try{
            const verificacao_existencia = prisma.usuario.findUnique({
                where:{
                    email: usuario.email
                }
            })
            if(verificacao_existencia != null)
                return null;
            else{
                const newUsuario = prisma.usuario.create({
                    data: usuario
                });
                return newUsuario;
            }
        }
        catch(error){
            return null;
        }
    }

    async updateUsuario(id: string, usuario: Prisma.UsuarioCreateInput){
        try{
            const updateUsua = await prisma.usuario.update({
                where: {id: id},
                data: usuario
            });
            return updateUsua;
        }
        catch(error){
            return null;
        }
    }

    async deleteUsuario(id: string){
        try{
            if(!id){
                return console.log("Não possui um elemento com esse id para ser deletado");
            }
            const detedUser = await prisma.usuario.delete({
                where:{id}
            })
            return console.log("Okay");
        }
        catch(error){
            return null;
        }
    }
    
}

export default new UsuarioService();