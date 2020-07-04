import md5 from 'md5';
import shortid from 'shortid';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetLocalHttpEvent = (req: any, res: any) => AWSHttpAPIEvent;

const getLocalHttpEvent: GetLocalHttpEvent = (req, res) => {
  const now = new Date();
  const domainPrefix = shortid();
  return {
    version: '2.0',
    routeKey: `ANY ${req.path}`,
    rawPath: req.path,
    rawQueryString: req.originalUrl,
    headers: {
      accept: req.header('accept'),
      'accept-encoding': req.header('accept-encoding'),
      'accept-language': req.header('accept-language'),
      'content-length': req.header('content-length'),
      'content-type': req.header('content-type'),
      host: req.header('host'),
      'user-agent': req.header('user-agent'),
      'x-amzn-trace-id': 'Root=1-5ef80489-a99490448fdcb87013a8a62c',
      'x-forwarded-for': req.header('x-forwarded-for'),
      'x-forwarded-port': req.header('x-forwarded-port'),
      'x-forwarded-proto': req.header('x-forwarded-proto'),
    },
    queryStringParameters: req.query ? req.query : undefined,
    requestContext: {
      accountId: '0123456789',
      apiId: shortid(),
      domainName: `${domainPrefix}.execute-api.local.amazonaws.com`,
      domainPrefix: domainPrefix,
      http: {
        method: req.method,
        path: req.path,
        protocol: req.protocol,
        sourceIp: req.connection.remoteAddress,
        userAgent: req.header('user-agent'),
      },
      requestId: md5(shortid()),
      routeKey: `ANY ${req.path}`,
      stage: 'default',
      time: now.toString(),
      timeEpoch: Math.round(now.getTime() / 1000),
    },
    body: req.body ? JSON.stringify(req.body) : undefined,
    isBase64Encoded: false,
  };
};

export default getLocalHttpEvent;
