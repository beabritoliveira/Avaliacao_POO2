import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class LeilaoServices{
    constructor(){}

    async listLeilao(id?: string){
        try{
            if(id){
                const leilao = prisma.leilao.findUnique({
                    where: {
                        id: id
                    }
                })
                return leilao;
            }
            const usuars = await prisma.usuario.findMany()
            return usuars;
        }catch(error){
            return null;
        }
    }

    async createLeilao(leilao : Prisma.LeilaoCreateInput){
        try{
            const newleilao = prisma.leilao.create({
                data: leilao
            });
            return newleilao;
        }
        catch(error){
            return null;
        }
    }

    async updateLeilao(id: string, leilao : Prisma.LeilaoCreateInput){
        try{
            const updateUsua = await prisma.leilao.update({
                where: {id: id},
                data: leilao
            });
            return updateUsua;
        }
        catch(error){
            return null;
        }
    }

    async deleteLeilao(id: string){
        try{
            if(!id){
                return console.log("Não possui um elemento com esse id para ser deletado");
            }
            const deletedleilao = await prisma.leilao.delete({
                where:{id}
            })
            return console.log("Okay");
        }
        catch(error){
            return null;
        }
    }
}

export default new LeilaoServices();