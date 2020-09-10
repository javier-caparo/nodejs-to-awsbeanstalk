# nodejs-to-awsbeanstalk
 NodeJs app to deploy to AWS beanstalk

# CircleCI Integration:
[![CircleCI](https://circleci.com/gh/jfcb853/nodejs-to-awsbeanstalk.svg?style=svg)](https://app.circleci.com/pipelines/github/jfcb853/nodejs-to-awsbeanstalk)

## Pipeline

Github --> AWS CodePipeline --> AWS Elastic BeanStalk 

## App details
 NodeJs app running on port 5000

 # Notes:
 - add this to the app.js file
 ```sh
 const port = process.env.port || 5000;
```
 - Add package json also add the "start" script: 
 ```sh
 "start" : "node src/app.js",
 ```

- Add AWS Elastic BeanStalk check the logs where the EBS is runnign the app ( exmaple 8080) , and add this to COnfiguration --> software , Environment as:
    port  8080

    Apply the changes.