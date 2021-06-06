import { GraphQLClient } from "graphql-request";

const baseUrl = "http://100.27.13.56/graphiql";
const client = new GraphQLClient(baseUrl);

export const https: any = ({ query, headers, variables }: any) => {
  client.setHeaders(headers || {});
  return client.request(query, variables).then(data => data);
};

export default https;
