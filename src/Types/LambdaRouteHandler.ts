import type { LambdaResponse } from './LambdaResponse';
import LambdaModes from '@typings/LambdaModes';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';
import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIContext from '@typings/AWSHttpAPIContext';
import AWSRestAPIContext from '@typings/AWSRestAPIContext';

export type LambdaRouteHandler = (
  mode: LambdaModes,
  event: AWSHttpAPIEvent | AWSRestAPIEvent,
  context: AWSHttpAPIContext | AWSRestAPIContext,
) => Promise<LambdaResponse>;

export default LambdaRouteHandler;
