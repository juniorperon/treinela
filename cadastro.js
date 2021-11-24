fetch("https://api-treinela.herokuapp.com/course/", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + readCookie("token")
            },
            body: JSON.stringify(payload) 
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            //LÓGICA PARA RETURN DE DATA
            console.log(data)
        }).catch(function (err) {
            //LÓGICA PARA RETURN ERROR
            throw new Error(err);            
        })
    
       