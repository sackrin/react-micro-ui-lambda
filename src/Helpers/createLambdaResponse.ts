import { LambdaResponse } from '@typings/LambdaResponse';

type CreateLambdaResponse = (
  body: Object | string,
  statusCode: number,
  headers: { [k: string]: any },
  type: 'json' | 'html',
) => LambdaResponse;

const createLambdaResponse: CreateLambdaResponse = (body, statusCode = 200, headers = {}, type = 'json') => ({
  headers: {
    'content-type': body === 'json' ? 'application/json' : 'text/html',
    ...headers,
  },
  statusCode: statusCode,
  body: body === 'json' ? JSON.stringify(body) : (body as string),
});

export default createLambdaResponse;
