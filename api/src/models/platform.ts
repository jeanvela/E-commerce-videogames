import { prop, modelOptions, getModelForClass } from "@typegoose/typegoose"

@modelOptions({
    schemaOptions: {
        timestamps: false
    }
})

export class Platform {
    @prop({type: String, require: true})
    platsform: string
}

export default getModelForClass(Platform)