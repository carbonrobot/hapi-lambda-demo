# Hapi.js Lambda Demo

A demo of running Hapi.js 17+ on AWS Lambda.

This application uses Hapi as the foundation, and is deployed to AWS Lambda and API gateway. We use the [Serverless](https://serverless.com) framework to provision and deploy the stack to AWS, as well as run it locally for debugging purposes.

## Getting Started

Run `npm install` from a shell or bash based window, then execute any of the following commands. To execute deployments, you must have configured your default AWS profile with an account that has access to Lambda, API Gateway, and Cloudformation.

To edit any of the parameters involved in deploying to AWS, check out the `serverless.yml` file.

## Development server

Run `npm start for a dev server.`.

## Debugging server

Run `npm run debug` for a debuggable instance.


