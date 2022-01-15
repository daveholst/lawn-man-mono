console.log('Hello World!')
// Load the AWS SDK for Node.js
import AWS from 'aws-sdk'
// Set region
AWS.config.update({region: 'REGION'});

// Create publish parameters
const params = {
  Message: 'MESSAGE_TEXT', /* required */
  TopicArn: 'TOPIC_ARN'
};




























// Create promise and SNS service object
const publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });