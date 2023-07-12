const saltRounds = 10;

const axios = require('axios');
const user = require("../../modals/user.modal");
const userMenu = require("../../modals/userMenu.modal");
// const userServices = require("../../modals/userServices.modal");
exports.getAllUsers = async (req, res, next) => {

    try {
        console.log('Received webhook event:', req.body);
        const Task = await userMenu.find({ perentMenu: req.params.id });

        res.send(Task);
    } catch (err) {
        throw new Error(err);
    }
}
const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: '',
    headers: { 
      'accept': '*/*', 
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI3NjZjZTYyMS04NjQ0LTRmMzktOWZiMy1hOGZmYTE3ZGYzNzQiLCJ1bmlxdWVfbmFtZSI6ImxpY2Vuc2VAbWFya2V0d2lja3MuY29tIiwibmFtZWlkIjoibGljZW5zZUBtYXJrZXR3aWNrcy5jb20iLCJlbWFpbCI6ImxpY2Vuc2VAbWFya2V0d2lja3MuY29tIiwiYXV0aF90aW1lIjoiMDUvMzAvMjAyMyAwOToyMToyMiIsImRiX25hbWUiOiIxMDY3NjYiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOiJBRE1JTklTVFJBVE9SIiwiZXhwIjoyNTM0MDIzMDA4MDAsImlzcyI6IkNsYXJlX0FJIiwiYXVkIjoiQ2xhcmVfQUkifQ.ZWAN4Wn-HoFDlStxhhzGaDP4XbOBWK6yZey-CKPUYY8', 
      'Content-Type': 'application/json-patch+json', 
     
    },
    data : []
  };

// exports.sendMessage = async (req, res, next) => {
//         try {
//                 console.log(" req.body", req.body);
//                 console.log("res ", res);
//                 //console.log("req.body.text :", req.body.text)

                

//                 if((req.body.text=="")||(req.body.text==undefined)){
//                     console.log("req.body.listReply.title",req.body.listReply.title)
//                     var Task = await userMenu.find({ perentMenu: req.body.listReply.title });
//                     var TaskData = await userMenu.find({ title: req.body.listReply.title });
//                 }else{
//                     console.log("req.body.message",req.body.text)
//                     var Task = await userMenu.find({ perentMenu: req.body.text});
//                     var TaskData = await userMenu.find({ title: req.body.text });
//                 }

//                 console.log("TaskData", TaskData)
//                 console.log("TaskData.length",TaskData.length)

//                 console.log("Task", Task)
//                 if((Task.length==0)&&(TaskData=="")){
        
//             var rowData=[]
//             var Task = await userMenu.find({ perentMenu: "Menu" });

//             config.data={
            
//                 "body": "Welcome in marketwikcs",
            
//                 "buttonText": "submit",
//                 "sections": [
//                     {
//                         "title": "menu",
//                         "rows":rowData
//                     }
//                 ]
//             }

//         Task.forEach(element => {
//             config.data.sections[0].rows.push({
//                 "title": element.title,
//                     "description": element.description, 
//             })
//         });

//         config.url='https://live-server-106766.wati.io/api/v1/sendInteractiveListMessage?whatsappNumber='+req.body.waId
               
//         }

//         else if((Task.length > 0)&&(TaskData.length !=0)){

//             var rowData=[]
        
//             var Task = await userMenu.find({ perentMenu: req.body.listReply.title });

//             config.data={
            
//                 "body": "Welcome in marketwikcs",
            
//                 "buttonText": "submit",
//                 "sections": [
//                     {
//                         "title": "menu",
//                         "rows":rowData
//                     }
//                 ]
//             }

//         Task.forEach(element => {
//             config.data.sections[0].rows.push({
//                 "title": element.title,
//                     "description": element.description, 
//             })

//         });

//         config.url='https://live-server-106766.wati.io/api/v1/sendInteractiveListMessage?whatsappNumber='+req.body.waId
                    
//         }else if((Task.length == 0)&&(TaskData.length !=0)){
//         console.log("TaskData.length",TaskData.length)
//         console.log("TaskData.length",Task.length)
//             config.url='https://live-server-106766.wati.io/api/v1/sendSessionMessage/'+req.body.waId+'?messageText='+ "req.body.message"
        
//         }
        
//         axios.request(config)
//         .then((response) => {
//             res.send(response.data);
//         })
//         .catch((error) => {
//             res.send(error);
//         //   console.log(error);
//         });
// } catch (err) {
//          throw new Error(err);
// }


  


    
// }

exports.sendMessage = async (req, res, next) => {
    try {
            
            console.log("req.body.text :", req.body)

            

            if((req.body.text=="")||(req.body.text==undefined)){
                
              
                var Task = await userMenu.find({ perentMenu: req.body.listReply.title });
                var TaskData = await userMenu.find({ title: req.body.listReply.title });
            }else{
                console.log("req.body.message",req.body.text)
                var Task = await userMenu.find({ perentMenu: req.body.text});
                var TaskData = await userMenu.find({ title: req.body.text });
            }

            // console.log("TaskData", TaskData)
            // console.log("TaskData.length",TaskData.length)

            // console.log("Task", Task)
            if((TaskData.length==0)&&(Task=="")){
                console.log("TaskData", TaskData)
                console.log("TaskData.length",TaskData.length)

                console.log("Task", Task)
    
        var rowData=[]
        var Task = await userMenu.find({ perentMenu: "Menu" });

        config.data={
        
            "body": "Welcome in marketwikcs",
        
            "buttonText": "submit",
            "sections": [
                {
                    "title": "menu",
                    "rows":rowData
                }
            ]
        }
console.log("config.dataconfig.data", config.data)
    Task.forEach(element => {
        console.log("element.title",element.title)
        config.data.sections[0].rows.push({
            "title": element.title,
                "description": element.description, 
        })
    });

    config.url='https://live-server-106766.wati.io/api/v1/sendInteractiveListMessage?whatsappNumber='+req.body.waId
      console.log(" config.url config.url config.url config.url11111",  config.url)     
    }

    else if((Task.length > 0)&&(TaskData.length !=0)){

        var rowData=[]
    
        var Task = await userMenu.find({ perentMenu: req.body.listReply.title });

        config.data={
        
            "body": "Welcome in marketwikcs",
        
            "buttonText": "submit",
            "sections": [
                {
                    "title": "menu",
                    "rows":rowData
                }
            ]
        }

    Task.forEach(element => {
        config.data.sections[0].rows.push({
            "title": element.title,
                "description": element.description, 
        })

    });

    config.url='https://live-server-106766.wati.io/api/v1/sendInteractiveListMessage?whatsappNumber='+req.body.waId
                
    }else if((Task.length == 0)&&(TaskData.length !=0)){
    console.log("TaskData.length",TaskData.length)
    console.log("TaskData.length",Task.length)
        config.url='https://live-server-106766.wati.io/api/v1/sendSessionMessage/'+req.body.waId+'?messageText='+ "req.body.message"
    
    }
    
    axios.request(config)
    .then((response) => {
        res.send(response.data);
    })
    .catch((error) => {
        res.send(error);
    //   console.log(error);
    });
} catch (err) {
     throw new Error(err);
}






}