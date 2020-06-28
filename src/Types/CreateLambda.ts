import type { CreateLambdaBoot } from './CreateLambdaBoot';
import type { CreateLambdaStrap } from './CreateLambdaStrap';
import type { CreateLambdaOptions } from './CreateLambdaOptions';
import type { CreateLambdaRoute } from './CreateLambdaRoute';
import type { LambdaResponse } from './LambdaResponse';
import { MicroUiConfigProfileEnv } from '@sackrin/react-micro-ui/lib/Types/MicroUiConfigProfileEnv';
import { MicroUiConfig } from '@sackrin/react-micro-ui/lib/Types/MicroUiConfig';
import LambdaModes from '@typings/LambdaModes';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';
import AWSRestAPIContext from '@typings/AWSRestAPIContext';
import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIContext from '@typings/AWSHttpAPIContext';

export type CreateLambda = (
  event: AWSHttpAPIEvent | AWSRestAPIEvent,
  context: AWSHttpAPIContext | AWSRestAPIContext,
  mode: LambdaModes,
  options: CreateLambdaOptions,
) =>
  | {
      route: CreateLambdaRoute;
      strap: CreateLambdaStrap;
      boot: CreateLambdaBoot;
      env: MicroUiConfigProfileEnv;
      config: MicroUiConfig;
      logger: any;
    }
  | LambdaResponse;

export default CreateLambda;
