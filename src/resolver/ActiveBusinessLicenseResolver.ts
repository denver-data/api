import { Resolver, Query, Args } from "type-graphql";
import { Repository, getRepository } from "typeorm";
import { ActiveBusinessLicense } from "../entity/ActiveBusinessLicense";
import { GetActiveBusinessLicenseArgs } from "./args/GetActiveBusinessLicenseArgs";
import { Location, normalizeAddress } from "../entity/Location";

@Resolver(ActiveBusinessLicense)
export class ActiveBusinessLicenseResolver {
    private readonly activeBusinessLicenseRepository: Repository<ActiveBusinessLicense> = getRepository(ActiveBusinessLicense)
    private readonly locationRepository: Repository<Location> = getRepository(Location)

    @Query(returns => ActiveBusinessLicense)
    async activeBusinessLicense(
        @Args() { bfn }: GetActiveBusinessLicenseArgs
    ): Promise<ActiveBusinessLicense> {
        const query = this.activeBusinessLicenseRepository
            .createQueryBuilder("abl");
        if (bfn) {
            query.where("abl.bfn = :bfn", { bfn })
        }
        const abl = await query.getOne();
        const location = await this.locationRepository.findOne({
            address: normalizeAddress(abl.establishmentAddress),
        });
        if (!location) {
            return abl;
        }
        abl.latitude = location.latitude;
        abl.longitude = location.longitude;
        return abl;
    }

    @Query(returns => [ActiveBusinessLicense])
    async activeBusinessLicenses(
        @Args() { bfn, licenseType, licenseStatus }: GetActiveBusinessLicenseArgs
    ): Promise<ActiveBusinessLicense[]> {
        const query = this.activeBusinessLicenseRepository
            .createQueryBuilder("abl");
        if (licenseStatus) {
            query.where("abl.license_status = :licenseStatus", { licenseStatus })
        }
        if (licenseType) {
            query.where("abl.license_type = :licenseType", { licenseType })
        }
        const abls = await query.getMany();
        return Promise.all(abls
            .map(async abl => {
                const location = await this.locationRepository.findOne({
                    address: normalizeAddress(abl.establishmentAddress),
                });
                if (!location) {
                    return abl;
                }
                abl.latitude = location.latitude;
                abl.longitude = location.longitude;
                return abl;
            }));
    }
}