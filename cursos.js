getCurso();

function getCurso() {
    $.get("https://api-treinela.herokuapp.com/course/", function (data) {
        $("#tabCurso").html('');
        $(data).each(function (i, e) {
            $("#tabCurso").append("<tr><td>" + e.id + "</td><td>" + e.Nome + "</td><td>" + e.Descricao + "</td><td>"+ "R$"+e.Valor + "</td><td>"+"<button class='btn btn-primary btnEditar' data-id='"+e.id+"'><i class='bi bi-pencil-square'></i> Editar</button> "
            +"<button class='btn btn-danger btnExcluir' data-id='"+e.id+"'><i class='bi bi-trash'></i> Excluir</button>"
            +"</td></tr>");
        });
    });
}