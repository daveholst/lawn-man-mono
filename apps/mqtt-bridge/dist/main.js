/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/mqtt-bridge/config.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.config = void 0;
exports.config = {
    region: 'ap-southeast-2',
    mqttServer: 'mqtt://mqtt:1883',
    mqttUsername: 'juicebox',
    mqttPassword: 'dY*t7LSgGhc%M4',
    snsTopicArn: 'arn:aws:sns:ap-southeast-2:739766728346:mqttBridge',
    mqttBridgeUserArn: 'arn:aws:iam::739766728346:user/mqttBridge',
    mqttBridgeUserId: 'AKIA2YPMIO2NDZUVGPEP',
    mqttBridgeUserSecret: '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',
};


/***/ }),

/***/ "./apps/mqtt-bridge/src/environments/environment.prod.ts":
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.environment = void 0;
exports.environment = {
    production: true,
    mqttServer: 'mqtt://mqtt:1883',
};


/***/ }),

/***/ "aws-sdk":
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "mqtt":
/***/ ((module) => {

module.exports = require("mqtt");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__("tslib");
const aws_sdk_1 = (0, tslib_1.__importDefault)(__webpack_require__("aws-sdk"));
const mqtt_1 = (0, tslib_1.__importDefault)(__webpack_require__("mqtt"));
const config_1 = __webpack_require__("./apps/mqtt-bridge/config.ts");
const environment_prod_1 = __webpack_require__("./apps/mqtt-bridge/src/environments/environment.prod.ts");
aws_sdk_1.default.config.update({
    region: config_1.config.region,
    accessKeyId: config_1.config.mqttBridgeUserId,
    secretAccessKey: config_1.config.mqttBridgeUserSecret,
});
const clientId = `mqtt_bridge_${Math.random().toString(16).slice(3)}`;
const client = mqtt_1.default.connect(environment_prod_1.environment.mqttServer, {
    clientId,
    clean: true,
    username: config_1.config.mqttUsername,
    password: config_1.config.mqttPassword,
    // connectTimeout: 5,
    reconnectPeriod: 1000,
});
console.log('STARTED SERICE ON :: ', environment_prod_1.environment.mqttServer);
// SNS message publisher
async function publishMessage(msg) {
    try {
        return new aws_sdk_1.default.SNS({ apiVersion: '2010-03-31' })
            .publish({
            Message: JSON.stringify(msg),
            TopicArn: config_1.config.snsTopicArn,
        })
            .promise();
    }
    catch (err) {
        console.error(err);
    }
}
// Connect MQTT client
client.on('connect', () => {
    client.subscribe('juicebox1/#', (err) => {
        if (!err) {
            console.log('MQTT Bridge Connected');
            client.publish('juicebox1', 'Bridge Online');
        }
        else {
            console.error('Failed to connect :: ', err);
        }
    });
});
// Watch MQTT for messages and Publish message to SNS topic
client.on('message', async (topic, message) => {
    if (!topic.includes('debug')) {
        const msg = {
            topic: topic,
            payload: message.toString(),
        };
        const msgInfo = await publishMessage(JSON.stringify(msg, null, 4));
        console.log('Message published to SNS topic :: ', msgInfo === null || msgInfo === void 0 ? void 0 : msgInfo.MessageId);
        console.log(msg);
    }
});
// Error Handling
client.on('error', (err) => {
    console.error(err);
});
client.on('reconnect', () => {
    console.log('reconnecting!');
});

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map