export type CompanyDetails = {
  name: string;
  nameNarrow: {
    firstLine: string;
    secondLine: string;
  };
  email: string;
  phone: string;
  address: string;
  addressNarrow: {
    firstLine: string;
    secondLine: string;
  };
  googleMapsLink: string;
};
