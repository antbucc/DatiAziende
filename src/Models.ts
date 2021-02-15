export interface RootObject {
  address: string;
  campaigns: string[];
  code: string;
  contactEmail: string;
  contactPhone: string;
  enabledApps: string[];
  locations: Location[];
  logo: string;
  name: string;
  web: string;
  companyUsers: CompanyUsers[];
}

export interface CompanyUsers {
  companyCode: string;
  name: string;
  role: string;
  surname: string;
  username: string;
  password: string;
}

export interface Location {
  address: string;
  city: string;
  country: string;
  id: string;
  latitute: number;
  longitude: number;
  province: string;
  radius: number;
  region: string;
  streetNumber: string;
  zip: string;
}