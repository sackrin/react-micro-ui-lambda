type AWSRestAPIContext = {
  "callbackWaitsForEmptyEventLoop": boolean,
  "functionVersion": string,
  "functionName": string,
  "memoryLimitInMB": string,
  "logGroupName": string,
  "logStreamName": string,
  "invokedFunctionArn": string,
  "awsRequestId": string
};

export default AWSRestAPIContext;
