type AWSHttpAPIEvent = {
  version: string;
  routeKey: string;
  rawPath: string;
  rawQueryString: string;
  headers: {
    [k: string]: string | void;
  };
  queryStringParameters?: {
    [k: string]: string | void;
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
