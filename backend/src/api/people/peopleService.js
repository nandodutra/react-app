const People = require("./people");
const errorHandle = require("../common/errorHandle");

People.methods(['get', 'post', 'put', 'delete']);
People.updateOptions({
    new: true, runValidations: true
});

People.after('post', errorHandle);
People.after('put', errorHandle);
People.after('delete', errorHandle);

module.exports = People;