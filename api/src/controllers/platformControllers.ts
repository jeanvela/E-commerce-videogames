import { Request, Response } from "express";
import { getModelForClass } from "@typegoose/typegoose";
import { Platform } from "../models/platform";

export const getPlatform = async (req: Request, res: Response) => {
    try {
        const PlatformModel = getModelForClass(Platform)
        const allPlatform = await PlatformModel.find()
        res.status(200).json(allPlatform)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const createPlatform = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deletePlatform = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        res.status(404).json(error)
    }
}