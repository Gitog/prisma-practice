import { PrismaClient } from "@prisma/client";

const prisma  = new PrismaClient();

async function main(){
    //Prisma Queries

    //Create new user
    // const user = await prisma.user.create({
    //     data:{
    //         name: 'James Njorio',
    //         email: 'jamesnjorio@gmail.com'
    //     }
    // })

    // console.log(user)

    //Create an article and associate it with users
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'Kenya',
    //         body: 'Kenya my mother land. Green and Peaceful!',
    //         author:{
    //             connect:{
    //                 id: 1
    //             }
    //         }
    //     }
    // })
    // console.log(article)

    //Creating user and article and associating the two
    // const user1 = await prisma.user.create({
    //     data:{
    //         name: 'Sarah James',
    //         email: 'sarahjames@gmail.com',
    //         articles:{
    //             create:{
    //                 title: "Accounting",
    //                 body: "For you to open an accounting firm, you need to first get certified as an accountant!"
    //             }
    //         }
    //     }
    // })

    // console.log(user1)
    // console.log()

    //create another article for sarah
    // const article = await prisma.article.create({
    //     data:{
    //         title: 'Audit',
    //         body: 'It is good and advisable to companies to have both internal and external auditors',
    //         author:{
    //             connect: {
    //                 id: 2
    //             }
    //         }
    //     }
    // })

     //Get all Users
     const users = await prisma.user.findMany();
     console.log(users)

      //Get all articles
    const articles = await prisma.article.findMany()
    console.log(articles)

    //Get users and articles
    const all = await prisma.user.findMany({
        include:{
            articles: true
        }
    })
    console.log(all)

    //Loop over sarah's articles
    users.forEach((user)=>{
        console.log(`USer: ${user.name}, Email: ${user.email}`)
        console.log("Articles Below")
        // user.articles.forEach((article) =>{
        //     console.log(`- Title: ${article.title}, Body: ${article.body}`)
        // })
        // console.log('\n');
    })

    //To Update data
    // const user2 = await prisma.user.update({
    //     where:{
    //         id:1,
    //     },
    //     data: {
    //         name: "Allan Njema"
    //     }
    // })
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