import type { LambdaRouteHandler } from "./LambdaRouteHandler";

export type LambdaRoute = [string, string, LambdaRouteHandler];

export default LambdaRoute;
