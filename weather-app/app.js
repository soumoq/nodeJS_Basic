const request = require('request');

const url="http://api.weatherstack.com/current?access_key=334ae39f7298e2962e8a400062089eb8&query=kolkata";

request({ url: url, json:true },(error,response)=>{
    console.log(response.body.current);
});