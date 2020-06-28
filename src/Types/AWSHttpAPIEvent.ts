type AWSHttpAPIEvent = {
  version: string;
  routeKey: string;
  rawPath: string;
  rawQueryString: string;
  headers: {
    accept: string;
    'accept-encoding': string;
    'accept-language': string;
    'content-length': string;
    'content-type': string;
    host: string;
    'postman-token': string;
    'user-agent': string;
    'x-amzn-trace-id': string;
    'x-forwarded-for': string;
    'x-forwarded-port': string;
    'x-forwarded-proto': string;
  };
  queryStringParameters?: {
    [k: string]: string;
  };
  requestContext: {
    accountId: string;
    apiId: string;
    domainName: string;
    domainPrefix: string;
    http: {
      method: string;
      path: string;
      protocol: string;
      sourceIp: string;
      userAgent: string;
    };
    requestId: string;
    routeKey: string;
    stage: string;
    time: string;
    timeEpoch: number;
  };
  body?: string;
  isBase64Encoded: boolean;
};

export default AWSHttpAPIEvent;
