import type { LambdaResponse } from '@typings/LambdaResponse';
import createLambdaResponse from '@helpers/createLambdaResponse';
import LambdaModes from '@typings/LambdaModes';

type DoNotFoundHandler = (mode: LambdaModes, event: any, context: any) => Promise<LambdaResponse>;

const doNotFoundHandler: DoNotFoundHandler = async (mode, event, context) =>
  createLambdaResponse({ notFound: true }, 404, {}, 'json');

export default doNotFoundHandler;
