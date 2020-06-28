type AWSRestAPIEvent = {
  resource: string;
  path: string;
  httpMethod: string;
  headers: {
    [k: string]: string;
  };
  multiValueHeaders: {
    [k: string]: string[];
  };
  queryStringParameters: null | {
    [k: string]: string;
  };
  multiValueQueryStringParameters: null | {
    [k: string]: string[];
  };
  pathParameters: null | {
    [k: string]: string;
  };
  stageVariables: null | {
    [k: string]: string;
  };
  requestContext: {
    resourceId: string;
    resourcePath: string;
    httpMethod: string;
    extendedRequestId: string;
    requestTime: string;
    path: string;
    accountId: string;
    protocol: string;
    stage: string;
    domainPrefix: string;
    requestTimeEpoch: number;
    requestId: string;
    identity: {
      cognitoIdentityPoolId: null | string;
      accountId: null | string;
      cognitoIdentityId: null | string;
      caller: null | string;
      sourceIp: string;
      principalOrgId: null | string;
      accessKey: null | string;
      cognitoAuthenticationType: null | string;
      cognitoAuthenticationProvider: null | string;
      userArn: null | string;
      userAgent: string;
      user: null | string;
    };
    domainName: string;
    apiId: string;
  };
  body: null | string;
  isBase64Encoded: boolean;
};

export default AWSRestAPIEvent;
