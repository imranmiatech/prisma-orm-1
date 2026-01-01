
import { prisma } from "./lib/prisma";




async function run() {
    // const createUser = await prisma.user.create({
    //     data: {
    //         name: "Iymyran",
    //         email: "imryran@gmail.com"
    //     }
    // })
    // console.log("Created user:", createUser)


    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "This is title",
    //         content: "this is content",
    //         authorId: 1
    // }
    // })
    // console.log("Created post:", createPost)

    //  const createdProfile = await prisma.profile.create({
    //     data: {
    //         bio: "web dev",
    //        userId: 1
    //     }
    //  })
    //  console.log(createdProfile)

    //retrive all user

    // const users = await prisma.user.findMany({
    // include: {
    //     posts: true,
    //     profile: true
    // }
    //     select: {
    //         id: true,
    //         name: true,
    //         email: true,
    //         posts: true,
    //         profile: true
    //     }
    // });
    // console.log(users, {depth: Infinity})

    // const updateUser = await prisma.profile.update({
    //     where: {
    //         userId: 1
    //     },
    //     data: {
    //         bio: "sr. web developer",
    //         dateOfBirth: "2025-12-30T17:58:02.687Z"
    //     },
    //         select: {
    //         id: true,
    //         bio: true,
    //         user: {
    //             select: {
    //                 name: true,
    //                 email: true
    //             }
    //         }
    //     }
    // })
    // console.log(updateUser)
    // const deleteUser = await prisma.user.delete({
    //     where: {
    //         id: 2
    //     }
    // })
    // console.log(deleteUser)

   const upsertUser = await prisma.user.upsert({
    where: {
        email: "imryran@gmail.com"
    },
    update: {
        name: "Ihan1"
    },
    create: {
        name: "Ihan2",
        email: "imryran@gmail.com"
    }
   })
   console.log(upsertUser)

}


run()