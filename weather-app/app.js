const request=require('request');

const locationURL="https://api.mapbox.com/geocoding/v5/mapbox.places/kolkata.json?access_token=pk.eyJ1IjoiYmF0NDg2NTUiLCJhIjoiY2thdzU4czVrMGZoczJxbzdlZng0djRpdiJ9.f8enBBAheKJv5TCvWeqooA";
request({url:locationURL,json:true},(error,response)=>{
    const lat=response.body.features[0].center[0];
    const lon=response.body.features[0].center[1];
    
    console.log(lat+" "+lon);
});

const cuntryName="kolkata";
const weatherURL="http://api.weatherstack.com/current?access_key=334ae39f7298e2962e8a400062089eb8&query="+cuntryName;

request({ url: weatherURL, json:true },(error,response)=>{
    console.log(response.body.current.temperature);
});