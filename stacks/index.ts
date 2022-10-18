import { MyStack } from "./MyStack";
import { App } from "@serverless-stack/resources";
import { MainStack } from "./MainStack";

export default function (app: App) {
  new MainStack(app, "MainStack");
}
