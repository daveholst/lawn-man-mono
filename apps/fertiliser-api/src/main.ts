// write basice gateway in here.
// test with fert basic response then up

// Import the [pulumi/aws](https://pulumi.io/reference/pkg/nodejs/@pulumi/aws/index.html) package
import * as pulumi from "@pulumi/pulumi"
import * as aws from "@pulumi/aws"
import * as awsx from "@pulumi/awsx"

// Create a public HTTP endpoint (using AWS APIGateway)
const endpoint = new awsx.apigateway.API("fertilser-api", {
    routes: [
        // Serve static files from the `www` folder (using AWS S3)
        // {
        //     path: "/",
        //     localPath: "www",
        // },

        // Serve a simple REST API on `GET /name` (using AWS Lambda)
        {
            path: "/",
            method: "GET",
            eventHandler: (req, ctx, cb) => {
                cb(undefined, {
                    statusCode: 200,
                    body: 'testing 123...',
                    // body: Buffer.from(JSON.stringify({ name: "AWS" }), "utf8").toString("base64"),
                    // isBase64Encoded: true,
                    // headers: { "content-type": "application/json" },
                });
            },
        },
    ],
});

// Export the public URL for the HTTP service
exports.url = endpoint.url