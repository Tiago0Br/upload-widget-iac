import * as aws from '@pulumi/aws'

const bucket = new aws.s3.BucketV2('primeiro-teste-pos-rocketseat', {
  bucket: 'primeiro-teste-do-tiaguinho',
  tags: {
    IAC: 'true',
  },
})

const ecr = new aws.ecr.Repository('segundo-teste-pos-rocketseat', {
  name: 'segundo-teste-pos-rocketseat',
  imageTagMutability: 'IMMUTABLE',
  tags: {
    IAC: 'true',
  },
})

export const bucketName = bucket.id
export const bucketArn = bucket.arn

export const ecrName = ecr.name
export const ecrRepoUrl = ecr.repositoryUrl
