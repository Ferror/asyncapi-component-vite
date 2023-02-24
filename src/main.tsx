import * as React from "react";
import { render } from "react-dom";
import AsyncApiComponent, { ConfigInterface } from "@asyncapi/react-component";

const schema = `
asyncapi: '2.0.0'
info:
  title: Example
  version: '0.1.0'
channels:
  example-channel:
    subscribe:
      message:
        payload:
          type: object
          properties:
            exampleField:
              type: string
            exampleNumber:
              type: number
            exampleDate:
              type: string
              format: date-time
`;

const config: ConfigInterface = {
    schemaID: 'custom-spec',
    show: {
        operations: false,
        errors: false,
    },
};

const App = () => <AsyncApiComponent schema={schema} config={config} />;

render(<App />, document.getElementById("root"));
