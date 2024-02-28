// import { Request, Response } from "express"
// import { User } from "../models/User"


// // READ
// export const getUsers = async (req: Request, res: Response) => {
//     try {
//         //Consultar en base de datos
//         const users = await User.find(
//             {
//                 select: {
//                     id: true,
//                     name: true,
//                     email: true,
//                     createdAt: true,
//                     updatedAt: true
//                 }
//             }
//         )


//         res.status(200).json(
//             {
//                 success: true,
//                 message: "Users retrieved successfully",
//                 data: users
//             }
//         )

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Users cant be retrieved",
//             error: error
//         })
//     }
// }


// export const getUserById = async (req: Request, res: Response) => {

//     try {
//         const userId = req.params.id;

//         const user = await User.findOneBy(
//             {
//                 id: parseInt(userId)
//             }
//         )

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found",

//             })

//         }

//         res.status(200).json(
//             {
//                 success: true,
//                 message: "User retrieved successfully",
//                 data: user
//             }
//         )
//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "User cant be retrieved",
//             error: error
//         })
//     }

// }



// // UPDATE
// export const updateUserById = async (req: Request, res: Response) => {
//     try {
//         const userId = req.params.id;
//         const name = req.body.name;

//         //Validar datos
//         const user = await User.findOneBy(
//             {
//                 id: parseInt(userId)
//             }
//         )

//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found",

//             })

//         }

//         // Tratar datos



//         // Actualizar datos
//         const userUpdated = await User.update(
//             {
//                 id: parseInt(userId)
//             },
//             {
//                 name: name
//             }
//         )




//         // Responder
//         res.status(200).json(
//             {
//                 success: true,
//                 message: "User updated successfully",
//                 data: userUpdated
//             }
//         )

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: "Users cant be update",
//             error: error
//         })
//     }
// }


// // DELETE
// export const deleteUserById = async (req: Request, res: Response) => {

//     try {
//         const userId = req.params.id

//         const user = await User.findOneBy({
//             id: parseInt(userId)
//         })
//         if (!user) {
//             return res.status(404).json({
//                 success: false,
//                 message: "User not found"
//             })
//         }

//         const userDeleted = await User.remove(user)
        
//         return res.status(200).json({
//             success: true,
//             message: "User deleted successfully",
//             data: userDeleted
//         })
//     } catch (error) {
//         return res.status(500).json({
//             success: false,
//             message: "User can't be deleted",
//             error: error
//         })
//     }
// }