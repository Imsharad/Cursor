import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import * as dotenv from 'dotenv';

dotenv.config();

export class CdkBackendStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket for storing blog content
    const contentBucket = new s3.Bucket(this, 'ContentBucket', {
      versioned: true,
      encryption: s3.BucketEncryption.S3_MANAGED,
    });

    // Create a Lambda function
    const backendFunction = new lambda.Function(this, 'BackendFunction', {
      runtime: lambda.Runtime.PYTHON_3_8,
      handler: 'server.handler',
      code: lambda.Code.fromAsset('../lambda'),
      environment: {
        CONTENT_BUCKET: contentBucket.bucketName,
        ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:3000,https://course-hub-gen-40p3ukpvg-sharad-jains-projects.vercel.app',
      },
    });

    // Grant the Lambda function read access to the S3 bucket
    contentBucket.grantRead(backendFunction);

    // Create an API Gateway
    const api = new apigateway.LambdaRestApi(this, 'BackendApi', {
      handler: backendFunction,
      proxy: false,
    });

    // Add routes
    const posts = api.root.addResource('api').addResource('blog-posts');
    posts.addMethod('GET');

    const singlePost = posts.addResource('{slug}');
    singlePost.addMethod('GET');

    // Output the API URL
    new cdk.CfnOutput(this, 'ApiUrl', {
      value: api.url,
      description: 'API Gateway URL',
    });
  }
}