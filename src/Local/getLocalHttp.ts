import getLocalHttpEvent from "@src/Local/getLocalHttpEvent";
import getLocalHttpContext from "@src/Local/getLocalHttpContext";

type GetLocalHttp = (handler: CallableFunction) => (req: any, res: any) => any;

const getLocalHttp: GetLocalHttp = (handler) => async (req, res) => {
  // Convert the express request into a mock lambda events and context
  const response = await handler(getLocalHttpEvent(req, res), getLocalHttpContext(req, res));
  // If the response is a block of HTML or text
  // This will happen for server side rendered components
  if (response?.headers['content-type'] === 'text/html') {
    res.send(response.body);
    // If the response is JSON which is the norm for most lambda responses
  } else if (response?.headers['content-type'] === 'application/json') {
    res.json(JSON.parse(response.body));
    // If the response is javascript which is to be expected from endpoints such as /bootstrap.js
  } else if (response?.headers['content-type'] === 'application/javascript') {
    res.send(response.body);
  } else {
    res.json(response);
  }
};

export default getLocalHttp;
