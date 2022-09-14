import {Request, Response} from "express"
import { BandBusiness } from "../business/BandBusiness"
import { BandDatabase } from "../data/BandDataBase"
import { BandInputDTO } from "../model/Band"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export class BandController {
    async createBand(req: Request, res: Response){
        const input : BandInputDTO = {
            name: req.body.name,
            mainGenre: req.body.mainGenre,
            responsible: req.body.responsible
        }

        const bandBusiness = new BandBusiness(
            new BandDatabase,
            new IdGenerator,
            new Authenticator
        )

        await bandBusiness.registerBand(input, req.headers.authorization as string)
    }
}