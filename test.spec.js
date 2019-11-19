require('dotenv').config();

const token = process.env.SLACK_TOKEN;
const tchannel = process.env.TESTING_CHANNEL;
const { RTMClient, LogLevel } = require('@slack/rtm-api');

const rtm = new RTMClient(token, {
	// logLevel: LogLevel.DEBUG,
});

(async () => {
	await rtm.start().catch(console.error);
})();

const food = require('./food');
const movie = require('./movie');
const assert = require('assert');

var res;
describe('유닛 테스트를 시작합니다.', async function () {
	before(async function() {
		return res = await food(rtm, tchannel);
	});

	it('밥 메시지 테스트', function (done) {
		assert.equal (res, 'success');
		done();
	});
});
