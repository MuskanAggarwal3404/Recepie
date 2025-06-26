import cron from "cron";
import https from "https";

const job=new cron.CronJob("*/14 * * * *",function(){
    https.get(process.env.API_URL,(res)=>{
        if(res.statusCode === 200) console.log("GET request sent successfully!");
        else console.log("GET unsuccessful!");

    }).on("error",(e)=>console.log("Error ",e));
})
export default job;