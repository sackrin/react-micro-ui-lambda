import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetRequestEventQuery = (mode: string, context: AWSRestAPIEvent | AWSHttpAPIEvent) => { [k: string]: any } ;

const getRequestEventQuery: GetRequestEventQuery = (mode, context) => context.queryStringParameters || {};

export default getRequestEventQuery;
