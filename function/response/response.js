module.exports = {
 
    errServerResponse: async(message) => {
        return { code: 502, result: { message: message } };
    },
      dataResponse: async(message, data) => {
        return { code: 200, result: { message: message, data: data } };
    },
   
};