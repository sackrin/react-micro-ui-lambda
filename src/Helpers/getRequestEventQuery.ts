import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetRequestEventQuery = (mode: string, event: AWSRestAPIEvent | AWSHttpAPIEvent) => { [k: string]: any };

const getRequestEventQuery: GetRequestEventQuery = (mode, event) => event.queryStringParameters || {};

export default getRequestEventQuery;
