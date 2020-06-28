import md5 from 'md5';
import { v4 as uuid } from 'uuid';
import shortid from 'shortid';
import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';

type GetLocalRestEvent = (req: any, res: any) => AWSRestAPIEvent;

const getLocalRestEvent: GetLocalRestEvent = (req, res) => {
  const now = new Date();
  const domainPrefix = shortid();
  return {
    resource: req.path,
    path: req.path,
    httpMethod: req.method,
    headers: {
      accept: req.header('accept'),
      'accept-encoding': req.header('accept-encoding'),
      'accept-language': req.header('accept-language'),
      'content-length': req.header('content-length'),
      'content-type': req.header('content-type'),
      host: req.header('host'),
      'user-agent': req.header('user-agent'),
      'x-amzn-trace-id': `Root=1-${uuid}`,
      'x-forwarded-for': req.header('x-forwarded-for'),
      'x-forwarded-port': req.header('x-forwarded-port'),
      'x-forwarded-proto': req.header('x-forwarded-proto'),
    },
    multiValueHeaders: {
      accept: [req.header('accept')],
      'accept-encoding': [req.header('accept-encoding')],
      'accept-language': [req.header('accept-language')],
      'content-length': [req.header('content-length')],
      'content-type': [req.header('content-type')],
      host: [req.header('host')],
      'user-agent': [req.header('user-agent')],
      'x-amzn-trace-id': [`Root=1-${uuid}`],
      'x-forwarded-for': [req.header('x-forwarded-for')],
      'x-forwarded-port': [req.header('x-forwarded-port')],
      'x-forwarded-proto': [req.header('x-forwarded-proto')],
    },
    queryStringParameters: null,
    multiValueQueryStringParameters: null,
    pathParameters: null,
    stageVariables: null,
    requestContext: {
      resourceId: '63onvw',
      resourcePath: '/debugRestLambda',
      httpMethod: 'POST',
      extendedRequestId: 'O0WTwGuSIAMFVzw=',
      requestTime: '28/Jun/2020:02:44:39 +0000',
      path: '/default/debugRestLambda',
      accountId: '015867651054',
      protocol: 'HTTP/1.1',
      stage: 'default',
      domainPrefix: 'uw9ldhv8o9',
      requestTimeEpoch: 1593312279904,
      requestId: '27f9b98f-232c-4de7-915f-b7621a46573d',
      identity: {
        cognitoIdentityPoolId: null,
        accountId: null,
        cognitoIdentityId: null,
        caller: null,
        sourceIp: req.connection.remoteAddress,
        principalOrgId: null,
        accessKey: null,
        cognitoAuthenticationType: null,
        cognitoAuthenticationProvider: null,
        userArn: null,
        userAgent: 'PostmanRuntime/7.26.1',
        user: null,
      },
      domainName: 'uw9ldhv8o9.execute-api.us-east-1.amazonaws.com',
      apiId: 'uw9ldhv8o9',
    },
    body: req.body ? JSON.stringify(req.body) : null,
    isBase64Encoded: false,
  };
};

export default getLocalRestEvent;
