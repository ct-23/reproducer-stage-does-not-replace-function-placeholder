import { Stage, StageProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import { StackInStage } from "./StackInStage";

export class MyStage extends Stage {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    new StackInStage(this, "StackInStage");
  }
}
