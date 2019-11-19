const food = async function (rtm, channel) {
	try {
		const res = await rtm.sendMessage('주변 맛집을 추천해드릴게요.', channel);
		//console.log("호출");
		return Promise.resolve('success');
	} catch (error) {
		console.log('에러!', error.data);
		return Promise.resolve('error');
	}
	
};
module.exports = food;
