let botao = document.getElementById("botao")
let container = document.getElementById("conteiner")

botao.addEventListener("click" , function(){
    let tweetescrito = document.getElementById("tweetescrito")
    let tweetpostado = document.getElementById("tweetpostado")

    if (tweetescrito.value.length == 0) {
        window.alert("escreva primeiro")
    } else {
        for (const c in tweetescrito) {
            tweetpostado.innerHTML = tweetescrito.value
        }
    }

})

let tema = document.getElementById("tema")

tema.addEventListener("click", function () {

    if (document.body.style.backgroundColor =="black") {

        document.body.style.backgroundColor="white"
        
    } else {
        document.body.style.backgroundColor="black"
    }
   
})