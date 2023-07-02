import { Request, Response } from "express"
import { getModelForClass } from "@typegoose/typegoose"
import { Videogame } from "../models/videogame"

export const getVideogames = async ( req: Request, res: Response) => {
    try {
        const VideogamesModels = getModelForClass(Videogame)
        const allVideogames: object = await VideogamesModels.find()
        res.status(200).json(allVideogames)
    } catch (error) {
        res.status(200).json(error)
    }
}

export const createVideogame = async ( req: Request, res: Response) => {
    try {
        const { title, image, price, description, category, platform } = req.body
        const VideogamesModels = getModelForClass(Videogame)
        const newVideogame = new VideogamesModels({
            title,
            image,
            price,
            description,
            category,
            platform
        })
        await newVideogame.save()
        res.status(200).json(newVideogame)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const deleteVideogame = async ( req: Request, res: Response) => {
    try {
        const { id } = req.params
        const VideogamesModels = getModelForClass(Videogame)
        const dtVideogame = await VideogamesModels.findByIdAndDelete(id)
        res.status(200).json(dtVideogame)
    } catch (error) {
        res.status(404).json(error)
    }
}

export const putVideogame = async (req: Request, res: Response) => {
    try {
        
    } catch (error) {
        res.status(404).json()
    }
}