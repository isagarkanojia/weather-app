const yargs=require('yargs');

const geocode=require('./geocode/geocode')
const weather=require('./weather/weather')

const argv=yargs
    .options({
      a:{
        demand:true,
        alias:'address',
        describe:'Address to fetch weather ',
        string:true
      }
    })
    .help()
    .alias('help','h')
    .argv;

geocode.geocodeAddress(argv.a,(errorMessage,results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(`Address: ${results.address}`);
    weather.getWeatherDetails(results.latitude,results.longitude,(errorMessage,results)=>{
        if(errorMessage){
          console.log(errorMessage);
        }else{
          console.log(`Currently it is ${results.temperature}`);
        }
    })
  }
});
