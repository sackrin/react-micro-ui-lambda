import type { LambdaResponse } from './LambdaResponse';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';
import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIContext from '@typings/AWSHttpAPIContext';
import AWSRestAPIContext from '@typings/AWSRestAPIContext';

export type CreateLambdaBoot = (
  event: AWSHttpAPIEvent | AWSRestAPIEvent,
  context: AWSHttpAPIContext | AWSRestAPIContext,
) => Promise<LambdaResponse>;

export default CreateLambdaBoot;
