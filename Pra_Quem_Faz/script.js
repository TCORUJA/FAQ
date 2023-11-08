/* $( "#conteudoBotaoExpadir1" ).on( "click", function() {
    document.getElementsById('conteudoRespostaPergunta1').classList.add('ocultar');
}); */

function botaoExpandirRecolherPergunta1(){

    if(document.getElementById('botaoExpadirRecolherPergunta1').getAttribute("name") == "expandir"){
        document.getElementById('conteudoRespostaPergunta1').classList.remove('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.add('exibir');
        document.getElementById('botaoExpadirRecolherPergunta1').classList.remove('expandir');
        document.getElementById('botaoExpadirRecolherPergunta1').classList.add('recolher');
        document.getElementById('botaoExpadirRecolherPergunta1').setAttribute("name", "recolher");
    }
    else if(document.getElementById('botaoExpadirRecolherPergunta1').getAttribute("name") == "recolher"){
        document.getElementById('conteudoRespostaPergunta1').classList.add('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.remove('exibir');
        document.getElementById('botaoExpadirRecolherPergunta1').classList.remove('recolher');
        document.getElementById('botaoExpadirRecolherPergunta1').classList.add('expandir');
        document.getElementById('botaoExpadirRecolherPergunta1').setAttribute("name", "expandir");
    }
}

function botaoExpandirRecolherPergunta2(){

    if(document.getElementById('botaoExpadirRecolherPergunta2').getAttribute("name") == "expandir"){
        document.getElementById('conteudoRespostaPergunta2').classList.remove('ocultar');
        document.getElementById('conteudoRespostaPergunta2').classList.add('exibir');
        document.getElementById('botaoExpadirRecolherPergunta2').classList.remove('expandir');
        document.getElementById('botaoExpadirRecolherPergunta2').classList.add('recolher');
        document.getElementById('botaoExpadirRecolherPergunta2').setAttribute("name", "recolher");
    }
    else if(document.getElementById('botaoExpadirRecolherPergunta2').getAttribute("name") == "recolher"){
        document.getElementById('conteudoRespostaPergunta2').classList.add('ocultar');
        document.getElementById('conteudoRespostaPergunta2').classList.remove('exibir');
        document.getElementById('botaoExpadirRecolherPergunta2').classList.remove('recolher');
        document.getElementById('botaoExpadirRecolherPergunta2').classList.add('expandir');
        document.getElementById('botaoExpadirRecolherPergunta2').setAttribute("name", "expandir");
    }
}

function botaoExpandirRecolherPergunta3(){

    if(document.getElementById('botaoExpadirRecolherPergunta3').getAttribute("name") == "expandir"){
        document.getElementById('conteudoRespostaPergunta3').classList.remove('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.add('exibir');
        document.getElementById('botaoExpadirRecolherPergunta3').classList.remove('expandir');
        document.getElementById('botaoExpadirRecolherPergunta3').classList.add('recolher');
        document.getElementById('botaoExpadirRecolherPergunta3').setAttribute("name", "recolher");
    }
    else if(document.getElementById('botaoExpadirRecolherPergunta3').getAttribute("name") == "recolher"){
        document.getElementById('conteudoRespostaPergunta3').classList.add('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.remove('exibir');
        document.getElementById('botaoExpadirRecolherPergunta3').classList.remove('recolher');
        document.getElementById('botaoExpadirRecolherPergunta3').classList.add('expandir');
        document.getElementById('botaoExpadirRecolherPergunta3').setAttribute("name", "expandir");
    }
}

function botaoExpandirRecolherPergunta4(){

    if(document.getElementById('botaoExpadirRecolherPergunta4').getAttribute("name") == "expandir"){
        document.getElementById('conteudoRespostaPergunta4').classList.remove('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.add('exibir');
        document.getElementById('botaoExpadirRecolherPergunta4').classList.remove('expandir');
        document.getElementById('botaoExpadirRecolherPergunta4').classList.add('recolher');
        document.getElementById('botaoExpadirRecolherPergunta4').setAttribute("name", "recolher");
    }
    else if(document.getElementById('botaoExpadirRecolherPergunta4').getAttribute("name") == "recolher"){
        document.getElementById('conteudoRespostaPergunta4').classList.add('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.remove('exibir');
        document.getElementById('botaoExpadirRecolherPergunta4').classList.remove('recolher');
        document.getElementById('botaoExpadirRecolherPergunta4').classList.add('expandir');
        document.getElementById('botaoExpadirRecolherPergunta4').setAttribute("name", "expandir");
    }
}

function botaoExpandirRecolherPergunta5(){

    if(document.getElementById('botaoExpadirRecolherPergunta5').getAttribute("name") == "expandir"){
        document.getElementById('conteudoRespostaPergunta5').classList.remove('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.add('exibir');
        document.getElementById('botaoExpadirRecolherPergunta5').classList.remove('expandir');
        document.getElementById('botaoExpadirRecolherPergunta5').classList.add('recolher');
        document.getElementById('botaoExpadirRecolherPergunta5').setAttribute("name", "recolher");
    }
    else if(document.getElementById('botaoExpadirRecolherPergunta5').getAttribute("name") == "recolher"){
        document.getElementById('conteudoRespostaPergunta5').classList.add('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.remove('exibir');
        document.getElementById('botaoExpadirRecolherPergunta5').classList.remove('recolher');
        document.getElementById('botaoExpadirRecolherPergunta5').classList.add('expandir');
        document.getElementById('botaoExpadirRecolherPergunta5').setAttribute("name", "expandir");
    }
}

function botaoExpandirRecolherPergunta6(){

    if(document.getElementById('botaoExpadirRecolherPergunta6').getAttribute("name") == "expandir"){
        document.getElementById('conteudoRespostaPergunta6').classList.remove('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.add('exibir');
        document.getElementById('botaoExpadirRecolherPergunta6').classList.remove('expandir');
        document.getElementById('botaoExpadirRecolherPergunta6').classList.add('recolher');
        document.getElementById('botaoExpadirRecolherPergunta6').setAttribute("name", "recolher");
    }
    else if(document.getElementById('botaoExpadirRecolherPergunta6').getAttribute("name") == "recolher"){
        document.getElementById('conteudoRespostaPergunta6').classList.add('ocultar');
        document.getElementById('conteudoRespostaPergunta1').classList.remove('exibir');
        document.getElementById('botaoExpadirRecolherPergunta6').classList.remove('recolher');
        document.getElementById('botaoExpadirRecolherPergunta6').classList.add('expandir');
        document.getElementById('botaoExpadirRecolherPergunta6').setAttribute("name", "expandir");
    }
}