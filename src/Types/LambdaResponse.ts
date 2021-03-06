export type LambdaResponse = {
  headers: { [key: string]: string },
  statusCode: number,
  body: string,
};

export default LambdaResponse;
