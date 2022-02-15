function validarSenhaForca(){
   var senha = document.getElementById("senhaforca").value; 
   var forca = 0

    document.getElementById("impSenha").innerHTML = "Senha: " + senha;

    if((senha.length >= 3) && (senha.length <=6)) {
        forca += 10

    } else if(senha.length > 6) {
        forca += 25;
    }

    if((senha.length >=4) && (senha.match(/[a-z]+/))){
        forca += 10;
    }

    if((senha.length >=6) && (senha.match(/[A-Z]+/))){
        forca += 20;
}   

    if((senha.length >= 6) && (senha.match(/[!@#$%^&*()-+]+/))) {
         forca += 25;
}

        mostraforca(forca);
}

function mostraforca(forca) {
    document.getElementById("impForcaSenha").innerHTML = "Força: " + forca;
    
    if(forca < 30){ 
        document.getElementById("erroForcaSenha").innerHTML = "<span style='color: #ff0000'>Fraca</span>";

    } else if((forca >= 30) && (forca < 50)){
        document.getElementById("erroForcaSenha").innerHTML = "<span style='color: #ffd700'>Média</span>";

    } else if((forca >= 50) && (forca < 70)){
        document.getElementById("erroForcaSenha").innerHTML = "<span style='color: #7fff00'>Forte</span>"; 
    } else if((forca >= 70) && (forca < 100)){
        document.getElementById("erroForcaSenha").innerHTML = "<span style='color: #008000'>Exelente!!</span>"; 
    }

}