var url = 'htp://myloger.io/log';

function log(message){
    // Send an HTTP  request
    console.log(message)
}

module.exports.log=log;
module.exports.url=url;