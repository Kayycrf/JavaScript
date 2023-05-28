function carregar(){   //calling function 'carregar' 
    let dia = document.getElementById('dia')   //variable 'dia' receives content with id 'dia' in html
    let tempo      =document.querySelector('div#tempo')   //variable 'tempo' receives content where is located the div with id 'tempo'
    let img = document.getElementById('fotinha') 
    let hoje = new Date()   //variable 'hoje' receives the method 'new Date()'
    let horas = hoje.getHours()   //variable 'horas' will receive the hours using 'hoje'
    tempo.innerHTML = (`Agora são <strong> ${horas} </strong> horas`)   //the content in id 'tempo' will be modified
  
    if (horas >= 0 && horas < 12){
        dia.innerText = 'Bom dia!'
        tempo.innerHTML = (`Agora são <strong> ${horas} </strong> horas`)   
        document.body.style.background = '#BD7477'
        img.src = "imagens/dia.png"   //image will be modified
    } else if (horas >= 12 && horas < 18){
        dia.innerText = 'Boa tarde!'
        document.body.style.background = '#FB950B'
        img.src = "imagens/tarde.png" 
    } else {
        dia.innerText = 'Boa noite!'
        document.body.style.background = '#0F1839'
        img.src = "imagens/noite.png"
    }
}
