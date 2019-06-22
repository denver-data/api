import { Resolver, Query } from "type-graphql";
import { Repository, getRepository } from "typeorm";
import { ActiveBusinessLicense } from "../entity/ActiveBusinessLicense";

@Resolver(ActiveBusinessLicense)
export class ActiveBusinessLicenseResolver {
    private readonly activeBusinessLicenseRepository: Repository<ActiveBusinessLicense> = getRepository(ActiveBusinessLicense)

    @Query(returns => [ActiveBusinessLicense])
    activeBusinessLicenses(): Promise<ActiveBusinessLicense[]> {
        return this.activeBusinessLicenseRepository.find();
    }
}