import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetRequestEventBody = (mode: string, context: AWSRestAPIEvent | AWSHttpAPIEvent) => { [k: string]: any };

const getRequestEventBody: GetRequestEventBody = (mode, context) => (context.body ? JSON.parse(context.body) : {});

export default getRequestEventBody;
