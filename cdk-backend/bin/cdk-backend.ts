#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkBackendStack } from '../lib/cdk-backend-stack';
import * as dotenv from 'dotenv';

dotenv.config();

const app = new cdk.App();
new CdkBackendStack(app, 'CdkBackendStack', {
  env: { 
    account: process.env.AWS_ACCOUNT_ID || process.env.CDK_DEFAULT_ACCOUNT, 
    region: process.env.AWS_REGION || process.env.CDK_DEFAULT_REGION 
  },
});