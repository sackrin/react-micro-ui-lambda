import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetRequestEventMethod = (mode: string, context: AWSRestAPIEvent | AWSHttpAPIEvent) => string;

const getRequestEventMethod: GetRequestEventMethod = (mode, context) =>
  mode === 'rest' ? (context as AWSRestAPIEvent).httpMethod : (context as AWSHttpAPIEvent).requestContext.http.method;

export default getRequestEventMethod;
