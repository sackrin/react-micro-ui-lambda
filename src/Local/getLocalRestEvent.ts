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
    queryStringParameters: req.query ? req.query : null,
    multiValueQueryStringParameters: null,
    pathParameters: null,
    stageVariables: null,
    requestContext: {
      resourceId: '63onvw',
      resourcePath: '/exampleLambda',
      httpMethod: 'POST',
      extendedRequestId: 'O0WTwGuSIAMFVzw=',
      requestTime: now.toString(),
      path: '/default/exampleLambda',
      accountId: '015867651054',
      protocol: 'HTTP/1.1',
      stage: 'default',
      domainPrefix: domainPrefix,
      requestTimeEpoch: 1593312279904,
      requestId: uuid(),
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
        userAgent: 'ExampleClient/7.26.1',
        user: null,
      },
      domainName: `${domainPrefix}.execute-api.local.amazonaws.com`,
      apiId: domainPrefix,
    },
    body: req.body ? JSON.stringify(req.body) : null,
    isBase64Encoded: false,
  };
};

export default getLocalRestEvent;
