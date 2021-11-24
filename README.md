CHAMADAS NA API 

fetch("https://api-treinela.herokuapp.com/*ROTA*/*PARAMETRO DE CONSULTA CASO HAJA*", {
            method: "*MÉTODO*",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
*ANOTAÇÃO => Caso a rota seja diferente de 'auth/login' DEVE SEMPRE pegar o token dos cookies com a função readCookie("field");
                e enviar desta maneira no header => 'Authorization': "Bearer " + readCookie("token");
            },
            body: JSON.stringify(payload) => caso precise de body, envie desta maneira
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            console.log(data)
            LÓGICA PARA RETURN DE DATA
        }).catch(function (err) {
            LÓGICA PARA RETURN ERROR
            throw new Error(err);            
        })