import AWSRestAPIEvent from '@typings/AWSRestAPIEvent';
import AWSHttpAPIEvent from '@typings/AWSHttpAPIEvent';

type GetRequestEventBody = (mode: string, event: AWSRestAPIEvent | AWSHttpAPIEvent) => { [k: string]: any };

const getRequestEventBody: GetRequestEventBody = (mode, event) => (event.body ? JSON.parse(event.body) : {});

export default getRequestEventBody;
