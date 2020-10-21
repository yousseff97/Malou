const axios = require('axios')

var token = null;
var productHuntConfig = {
    "client_id": "UPt95egb9Z0AaVFTYsADcaLjFcaRMMlGFQIBSV78gyg",
    "client_secret": "PEnHoux33p22No86GwI-8JOLsljkoPtL1zJfMa5C6F4",
    "grant_type": "client_credentials"
  }

async function init(){
    try{
        const response = await axios.post('https://api.producthunt.com/v2/oauth/token', productHuntConfig)
        return response.data.access_token;
    }catch(err) {
        // Handle Error Here
        console.error(err);
    }
}

async function getToken(){
    if (!token){
        token = await init()
        return token
    }
    return token
}

module.exports.getToken = getToken;