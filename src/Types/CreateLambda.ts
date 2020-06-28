import type { CreateLambdaBoot } from './CreateLambdaBoot';
import type { CreateLambdaStrap } from './CreateLambdaStrap';
import type { CreateLambdaOptions } from './CreateLambdaOptions';
import type { CreateLambdaRoute } from './CreateLambdaRoute';
import type { LambdaResponse } from './LambdaResponse';
import { MicroUiConfigProfileEnv } from '@sackrin/react-micro-ui/lib/Types/MicroUiConfigProfileEnv';
import { MicroUiConfig } from '@sackrin/react-micro-ui/lib/Types/MicroUiConfig';

export type CreateLambda = (
  event: any,
  context: any,
  mode: 'rest' | 'http',
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
