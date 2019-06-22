import { Resolver, Query, Args } from "type-graphql";
import { Repository, getRepository } from "typeorm";
import { ActiveBusinessLicense } from "../entity/ActiveBusinessLicense";
import { GetActiveBusinessLicenseArgs } from "./args/GetActiveBusinessLicenseArgs";

@Resolver(ActiveBusinessLicense)
export class ActiveBusinessLicenseResolver {
    private readonly activeBusinessLicenseRepository: Repository<ActiveBusinessLicense> = getRepository(ActiveBusinessLicense)

    @Query(returns => [ActiveBusinessLicense])
    activeBusinessLicenses(
        @Args() { licenseType, licenseStatus }: GetActiveBusinessLicenseArgs
    ): Promise<ActiveBusinessLicense[]> {
        const query = this.activeBusinessLicenseRepository
            .createQueryBuilder("abl");
        if (licenseStatus) {
            query.where("abl.license_status = :licenseStatus", { licenseStatus })
        }
        if (licenseType) {
            query.where("abl.license_type = :licenseType", { licenseType })
        }
        return query.getMany();
    }
}