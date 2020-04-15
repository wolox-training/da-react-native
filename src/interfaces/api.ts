export type AuthHeaders = {
  'access-token': string;
  uid: string;
  client: string;
};

export type QueryParams = {
  [key: string]: any;
};

export type Query = (...args: any[]) => Promise<any>;
