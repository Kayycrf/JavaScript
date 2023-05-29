function verificar(){
    let nasc0 = document.getElementById('idade')
    let nasc= Number(nasc0.value)
    let masc = document.getElementById('masc')
    let fem = document.getElementById('fem')
    let result = document.getElementById('result')
    let ano = new Date()
    let max = ano.getFullYear()
    let idade = max - nasc
    let img = document.getElementById('imagem')
    
    if (nasc == '' || nasc > max) { 
        alert('Digite uma data de nascimento válida')
    }
   
    else if (masc.checked){
        if (idade >= 18 && idade < 60){
            result.innerHTML = `Detectamos um homem de <strong> ${idade} </strong>anos`
            img.src="imagens/homem.png"
        } else if (idade >= 60){
            result.innerHTML = ` Detectamos um senhor de <strong> ${idade} </strong> anos.`
            img.src="imagens/idoso.png"
        }
    }     
    
    else if (fem.checked){
        if (idade >= 18 && idade < 60){
            result.innerHTML = `Detectamos uma mulher de <strong> ${idade} </strong> anos`
            img.src = "imagens/mulher.png"
        } else if (idade >= 60){
             result.innerHTML = `Detectamos uma senhora de <strong> ${idade} </strong> anos `
             img.src="imagens/idosa.png"
        }
        
    }

}
    



