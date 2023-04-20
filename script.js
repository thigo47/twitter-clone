let botao = document.getElementById("botao")
let container = document.getElementById("conteiner")
let cabeça = document.getElementById("cabeça")

botao.addEventListener("click" , function(){
    let tweetescrito = document.getElementById("tweetescrito")
    let containertweet = document.getElementById("containertweet")

    if (tweetescrito.value.length == 0) {
        window.alert("escreva primeiro")
    } else {
          

           let filhott = document.createElement("div")
           filhott.id = "filhott"

           containertweet.appendChild(filhott)

            filhott.innerHTML = tweetescrito.value

   
    }

})

let tema = document.getElementById("tema")

tema.addEventListener("click", function () {

    if (document.body.style.backgroundColor =="rgb(21, 21, 21)") {

        document.body.style.backgroundColor="white"
        cabeça.style.backgroundColor="#023E8A"
        
        
    } else {
        document.body.style.backgroundColor="rgb(21, 21, 21)"
        cabeça.style.backgroundColor="#03045E"
    }
   
})