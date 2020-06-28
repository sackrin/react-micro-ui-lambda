# React Micro UI Lambda

This library adds the ability to quick host a micro UI within the AWS lambda environment. The library works alongside the react-micro-ui library.

## Installation

```npm i -s @sackrin/react-micro-ui-lambda```

## Usage

within your micro ui src/lambda.js

```
import path from 'path';
import { ExampleComponent } from './Components';
import createLambdaMicroUI from '@sackrin/react-micro-ui-lambda/lib/createLambdaMicroUI';

exports.handler = async (event, context) => {
  // Retrieve the local config
  const microUIConfig = require(path.join(process.cwd(), 'microui.config.js'));
  // Create the Lambda
  const { route, strap, boot, env, config, logger } = createLambdaMicroUI(event, context, 'http', {
    profile: process.env.PROFILE || 'local',
    config: microUIConfig,
  });
  // API ENDPOINTS
  route('/example', 'GET', doExampleEndpoint);
  // SERVER SIDE RENDERED COMPONENTS
  // Strap in the front end components
  strap('ExampleComponent', ExampleComponent);
  // Boot and handle the response
  return boot(event, context);
};
```

## Create Lambda Micro UI

### createLambdaMicroUI

Use this to create your micro UI lambda

- event: the aws lambda event
- context: the aws lambda context
- mode: http or rest depending on your API gateway
- config: the micro UI config
- profile: the environment profile ie local, dev, stage
- logger: your choice of logger

```const { route, strap, boot, env, config, logger } =  createLambdaMicroUI(event, context, mode, { config, profile = 'local', logger = console })```

## Callbacks

### route(path, method, handler)

Use this to bootstrap API endpoint handlers

- path: the api path
- method: GET | POST | PUT | DELETE
- handler: the handler which will be invoked

```route('/example', 'GET', doExampleEndpoint)```

### strap(name, component)

Use this to bootstrap react components for server side rendering. Not required if you do not intend on providing server side rendered components.

- name: the name of the component
- component: the react component

```strap('ExampleComponent', ExampleComponent)```

### boot(event, context)

Use to handle a lambda request

- event: the aws lambda event
- context: the aws lambda context

```boot(event, context)```

## Extras

### env

The current resolved environment the micro UI is using. This is calculated via the micro UI config and the supplied profile

### config

The current config the micro UI is using.

### logger

The current logger the micro UI is using. This will either be the logger you supplied or the default logger (console)
