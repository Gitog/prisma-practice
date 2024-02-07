import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

async function main(){
    //Prisma Queries
    //Create new user
    const user = await prisma.user.create({
        data:{
            name: 'James Njorio',
            email: 'jamesnjorio@gmail.com'
        }
    })
    
    console.log(user)
}

main()
    .then(async() => {
        await prisma.$disconnect();
    })
    .catch(async(e) =>{
        console.error(e)
        await prisma.$disconnect();
        process.exit(1)
    })