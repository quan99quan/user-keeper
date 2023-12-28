import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default {
    createUser: async ({ name, description }) => {
        try {
            return await prisma.users.create({
                data: {
                    name,
                    description
                    
                }
            })
        } catch (err) {
            throw new Error(`Creating error  ${err.message}`)
        }
    },

    getAllUsers: async () => {
        try {
            return await prisma.users.findMany();
        } catch (err) {
            throw new Error(`Search error ${err.message}`)
        }
    },
    getIdUsers: async (id) => {
        try {
            return await prisma.users.findUnique({
                where: {
                    id,
                }
            })
        } catch (err) {
            throw new Error(` ID error ${err.message}`)
        }
    },
    updateUser: async (id, { name, description }) => {
        try {
            return await prisma.users.update({
                where: {
                    id,
                },
                data: {
                    name,
                    description
                }
            })
        } catch (err) {
            throw new Error(`Update error:${err.message}`);
        }
    },
    deleteUser: async (id) => {
        try {
            return await prisma.users.delete({
                where: {
                    id,
                }
            });
        } catch (err) {
            throw new Error(`Delete Error: ${err.message}`)
        }
    }

}
