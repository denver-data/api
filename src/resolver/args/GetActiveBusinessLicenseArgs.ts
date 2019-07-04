import { ArgsType, Field } from "type-graphql";

@ArgsType()
export class GetActiveBusinessLicenseArgs {
  @Field({ nullable: true })
  bfn?: string;

  @Field({ nullable: true })
  licenseStatus?: string;

  @Field({ nullable: true })
  licenseType?: string;
}