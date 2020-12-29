#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkDockerLambdaStack } from '../lib/lambda_service/stacks/cdk_docker_lambda_stack';

const app = new cdk.App();
new CdkDockerLambdaStack(app, 'CdkDockerLambdaStack');
