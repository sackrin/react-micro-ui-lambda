import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetRequestEventPath = (mode: string, event: AWSRestAPIEvent | AWSHttpAPIEvent) => string;

const getRequestEventPath: GetRequestEventPath = (mode, event) =>
  mode === 'rest' ? (event as AWSRestAPIEvent).path : (event as AWSHttpAPIEvent).requestContext.http.path;

export default getRequestEventPath;
