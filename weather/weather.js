const request = require('request');


var getWeatherDetails=(lat,lng,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/986fbfe89181b7d6e262aee92ae61e25/${lat},${lng}`,
    json:true
  }, (error, response, body)=> {
    if(!error && response.statusCode==200){
      callback(undefined,{
        temperature:body.currently.temperature
      });
    }else{
      callback("Unable to connect to forecast server.")
    }
  });

}

module.exports={
  getWeatherDetails
};
