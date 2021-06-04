let modules = require('./posts_module');

module.exports = {
  index: async (req, res, next) => {
    let response = await modules.index();
    res.status(response.code).send(response.result);
  },

};
