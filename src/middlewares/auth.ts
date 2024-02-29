import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken"
import { TokenData } from "../types";

export const auth = async (req: Request, res: Response, next: NextFunction) => {

    const token = req.headers.authorization?.split(" ")[1]

    try {

        if (!token) {
            return res.status(401).json(
                {
                    success: false,
                    message: "Unauthorized",
                }
            )
        }

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        )
   
     req.tokenData = decoded as TokenData

     next();
     
    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "JWT NO VALID OR MALFORMED",
            }
        )
    }
}

