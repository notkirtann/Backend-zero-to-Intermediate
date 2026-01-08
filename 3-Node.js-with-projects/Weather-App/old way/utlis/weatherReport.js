import request from "request";

//weather stack api working
const weatheReport =(locationCoordinate,callback)=>{
    const geoLocation = [...locationCoordinate].reverse().join(',');
    const access_key = '0039bf40464f6f5052987ff001cac2d9'
    const units ='m'; //f for farehn, s for scientific kelvin
    const weatherStackUrl = `https://api.weatherstack.com/current?access_key=${access_key}&query=${geoLocation}&units=${units}`;

    request({url: weatherStackUrl,json:true},(error,response)=>{
            if(error) {
                callback(('error connecting... to Weather Stack api'),undefined);
            } else if (response.body.error) {
                callback(('wrong/invlaid geo location'),undefined);
            }else{
                callback(undefined,(response.body.current));
            }
        }
    )
}

export default weatheReport;