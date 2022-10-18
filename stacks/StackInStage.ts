import { Construct } from "constructs";
import { Api, Stack } from "@serverless-stack/resources";

export class StackInStage extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const api = new Api(this, "api", {
      routes: {
        "GET /": "services/functions/lambda.handler",
      },
    });
  }
}
