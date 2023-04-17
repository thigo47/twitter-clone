let botao = document.getElementById("botao")

botao.addEventListener("click" , function(){
    let tweetescrito = document.getElementById("tweetescrito")
    let tweetpostado = document.getElementById("tweetpostado")

tweetpostado.innerHTML = tweetescrito.value + "<br>"
})