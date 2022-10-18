import { Construct } from "constructs";
import { Stack } from "@serverless-stack/resources";
import { MyStage } from "./MyStage";
import { aws_codepipeline, pipelines } from "aws-cdk-lib";
import { StageDeployment } from "aws-cdk-lib/pipelines";

export class MainStack extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const stage = new MyStage(this, "MyStage");

    //#region #how we use it
    //we create stages to group and coordinate stack-deployments within pipelines.
    /*
    const pipeline = new pipelines.CodePipeline(this, "Pipeline", {
      synth: new pipelines.ShellStep("Synth", {
        input: pipelines.CodePipelineSource.connection(
          "my-org/my-app",
          "main",
          {
            connectionArn:
              "arn:aws:codestar-connections:us-east-1:222222222222:connection/7d2469ff-514a-4e4f-9003-5ca4a43cdc41", // Created using the AWS console * });',
          }
        ),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });
    pipeline.addStage(stage);
    */
    //#endregion

    //one of the first things addStage calls is stage.synth
    //according to documentation it makes assemblies immutable. this might be the reason why since the async-build
    //change, placeholders do not get replaced in our usecase
    stage.synth({
      validateOnSynthesis: true,
    });
  }
}
