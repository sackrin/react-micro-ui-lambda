import type { LambdaResponse } from './LambdaResponse';
import LambdaModes from '@typings/LambdaModes';

export type LambdaRouteHandler = (mode: LambdaModes, event: any, context: any) => Promise<LambdaResponse>;

export default LambdaRouteHandler;
