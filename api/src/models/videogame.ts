import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose";

@modelOptions({
    schemaOptions: {
        timestamps: false // * para saber cuando fue creado
    }
})

export class Videogame {
    @prop({type: String, required: true})
    title: string

    @prop({type: Number, required: true})
    price: number

    @prop({type: String, required: true})
    description: string

    @prop({type: () => [String]})
    category: string[]

    // @prop({type: Array})
    // platform: array
}

export default getModelForClass(Videogame)