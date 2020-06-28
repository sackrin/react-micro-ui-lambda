import md5 from 'md5';
import { v4 as uuid } from 'uuid';
import AWSRestAPIContext from '@typings/AWSRestAPIContext';

type GetLocalRestContext = (req: any, res: any) => AWSRestAPIContext;

const getLocalRestContext: GetLocalRestContext = (req, res) => {
  const now = new Date();
  return {
    callbackWaitsForEmptyEventLoop: true,
    functionVersion: '$LATEST',
    functionName: 'exampleFunction',
    memoryLimitInMB: '512',
    logGroupName: '/aws/lambda/exampleFunction',
    logStreamName: `${now.getFullYear()}/${now.getMonth()}/${now.getDate()}/[$LATEST]${md5(uuid())}`,
    invokedFunctionArn: 'arn:aws:lambda:local:01234567891:function:exampleFunction',
    awsRequestId: uuid(),
  };
};

export default getLocalRestContext;
