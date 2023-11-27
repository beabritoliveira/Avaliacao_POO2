import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class LanceServices{
    constructor(){}

    async listLance(id?: string){
        try{
            if(id){
                const lance = prisma.lance.findUnique({
                    where: {
                        id: id
                    }
                })
                return lance;
            }
            const lances = await prisma.lance.findMany()
            return lances;
        }catch(error){
            return null;
        }
    }

    async createLance(lance: Prisma.LanceCreateInput){
        try{
            const newlance = prisma.lance.create({
                data: lance
            });
            return newlance;
        }
        catch(error){
            return null;
        }
    }

    async updateLance(id: string, lance: Prisma.LanceCreateInput){
        try{
            const updatelance = await prisma.lance.update({
                where: {id: id},
                data: lance
            });
            return updatelance;
        }
        catch(error){
            return null;
        }
    }

    async deleteLance(id: string){
        try{
            if(!id){
                return console.log("Não possui um elemento com esse id para ser deletado");
            }
            const detedLance = await prisma.lance.delete({
                where:{id}
            })
            return console.log("Okay");
        }
        catch(error){
            return null;
        }
    }
}

export default new LanceServices();