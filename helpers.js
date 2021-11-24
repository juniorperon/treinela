//FUNÇÃO UUTILIZADA PARA SALVAR UM COOKIE DE SESSÃO (VERIFIQUE O JS DE LOGIN PARA VER EM EXECUÇÃO)
function writeCookie(field, value) {
    document.cookie = field + "=" + value + "; path=/";
}


//UTILIZADO PARA LER O COOKIE (DEVERÁ SER USADO SEMPRE QUE FOR FAZER UMA CHAMADA PRA API, QUE NÃO SEJA A ROTA DE AUTH/LOGIN, PARA QUE HAJA AUTENTICAÇÃO)
function readCookie(name) {
    var i, c, ca, nameEQ = name + "=";
    ca = document.cookie.split(';');
    for (i = 0; i < ca.length; i++) {
        c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return '';
}