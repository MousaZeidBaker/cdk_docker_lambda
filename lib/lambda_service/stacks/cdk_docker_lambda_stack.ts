import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import * as path from "path";

export class CdkDockerLambdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    new lambda.DockerImageFunction(this, 'MyFunction', {
      code: lambda.DockerImageCode.fromImageAsset(path.join(__dirname, '../handlers/docker_handler')),
    });
  }
}
