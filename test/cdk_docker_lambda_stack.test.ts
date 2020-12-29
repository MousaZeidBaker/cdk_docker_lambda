import { expect as expectCDK, haveResource } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as CdkDockerLambda from '../lib/lambda_service/stacks/cdk_docker_lambda_stack';

test('CdkDockerLambdaStack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new CdkDockerLambda.CdkDockerLambdaStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(
      haveResource('AWS::Lambda::Function'))
});
