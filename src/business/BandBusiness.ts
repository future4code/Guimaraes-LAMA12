import { Band, BandInputDTO } from "../model/Band";
import { UserRole } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { InvalidInput, UnauthorizedUser } from "../error/BaseError";
import { BandDatabase } from "../data/BandDataBase";

export class BandBusiness {
    constructor (
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    async registerBand(input: BandInputDTO, token: string){
        const tokenData = this.authenticator.getData(token)

        const id = this.idGenerator.generate()

        if(tokenData.role !== UserRole.ADMIN){
            throw new UnauthorizedUser("Usuário não permitido")
        }

        if(!input.name || !input.mainGenre || !input.responsible){
            throw new InvalidInput("Invalid input to register band")
        }

        await this.bandDatabase.createBand(
            Band.toBand({
                ...input,
                id: id
                
            })
        )

    }
}