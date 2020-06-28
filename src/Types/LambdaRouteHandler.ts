import type { LambdaResponse } from "./LambdaResponse";

export type LambdaRouteHandler = (event: any, context: any) => Promise<LambdaResponse>;

export default LambdaRouteHandler;
