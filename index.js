fetch("http://localhost:8080/items").then(function (res){
    return res.json()
}  ). then(data=> console.log(data))