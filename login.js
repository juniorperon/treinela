/*getUser();

function getUser() {
    $.get("https://api-treinela.herokuapp.com/user/"), function (data) {
        $("#tabCurso").html('');
        $(data).each(function (i, e) {
            $("#tabCurso").append("<tr><td>" + e.id + "</td><td>" + e.Nome + "</td><td>" + e.Descricao + "</td><td>"+ "R$"+e.Valor + "</td><td>"+"<button class='btn btn-primary btnEditar' data-id='"+e.id+"'><i class='bi bi-pencil-square'></i> Editar</button> "
            +"<button class='btn btn-danger btnExcluir' data-id='"+e.id+"'><i class='bi bi-trash'></i> Excluir</button>"
            +"</td></tr>");
        });
    }
}
*/
function verificacaoLogin() {
    const login = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    setTimeout(() => {
        let payload = {
            "email": login,
            "password": senha
        }

        fetch("https://api-treinela.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        }).then(function (res) {
            return res.json();
        }).then(function (data) {
            console.log(data)
            if (data.error == "Unauthorized") {
                alert("Login não realizado, verifique as informações digitadas!");
            } else if (data.token) {
                let decoded = jwt_decode(data.token);

                if (decoded.type != 'ADM') {
                    alert("Você não pode acessar esta página!");
                    window.location.reload();
                } else {
                    writeCookie("email", decoded.email);
                    writeCookie("expiresAt", decoded.exp);
                    writeCookie("issuedAt", decoded.iat);
                    writeCookie("id", decoded.sub);
                    writeCookie("type", decoded.type);
                    writeCookie("token", data.token);
                    location.href = "/cursos.html";
                }
            } else {
                alert("Ocorreu um erro, contate o administrador do site!");
            }
        }).catch(function (err) {
            throw new Error(err);
        })
    }, 500);
}


