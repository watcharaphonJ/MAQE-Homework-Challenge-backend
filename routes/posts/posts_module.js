

const {
    errServerResponse,
    dataResponse
} = require('../../function/response/response');
const axios = require('axios');
const index = async () => {
    try {
    var url = 'http://maqe.github.io/json/posts.json'
        var result = await axios.get(url)
        var { data } =result
        console.log(data);
        return await dataResponse('success', data);
    } catch (error) {
        console.log(error.message);
          return await errServerResponse(error.message);
    }

 }

module.exports = { index };