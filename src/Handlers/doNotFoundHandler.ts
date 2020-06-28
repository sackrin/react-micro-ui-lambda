import type { LambdaResponse } from '@typings/LambdaResponse';
import createLambdaResponse from '@helpers/createLambdaResponse';

type DoNotFoundHandler = (event: any, context: any) => Promise<LambdaResponse>;

const doNotFoundHandler: DoNotFoundHandler = async (event, context) =>
  createLambdaResponse({ notFound: true }, 404, {}, 'json');

export default doNotFoundHandler;
