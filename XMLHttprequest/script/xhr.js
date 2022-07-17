const makeRequest=(method,url,Data)=>{
    const xhr=new XMLHttpRequest()
    xhr.open(method,url)
    xhr.setRequestHeader('context-type','application.json')

    xhr.onload=()=>{
        let data=xhr.response;
        console.log(data)
    }

    xhr.onerror=()=>{
        console.log("erroe is hear")
    }
    xhr.send(JSON.stringify(Data))

}

const getuser=()=>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/todos');

}

const sendData=()=>{
    makeRequest('POST','https://jsonplaceholder.typicode.com/todos',{
    "userId":00,
    "id": 44,
    "title": "mkzoixajs;a",
    "completed": false
    })

}


//getuser()
sendData()