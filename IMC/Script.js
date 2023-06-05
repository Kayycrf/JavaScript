function calcular(){
    let peso0 = document.getElementById('peso')
    let altura0 = document.getElementById('altura')
    let res = document.getElementById('res')

    let peso = Number(peso0.value)
    let altura = Number(altura0.value)
    let ideal0 = peso / altura ** 2
    let ideal = ideal0.toFixed(2)
    
    if (peso < 0 || altura < 0 || peso == '' || altura == ''){
        alert('Digite informações válidas')
    }
    
    else if(ideal < 18.5){
        res.innerHTML = `Você está abaixo do peso ideal com ${ideal} pontos`
        res.style.color = 'red'
    }
    
    else if (ideal >= 18.5 && ideal <= 25){
        res.innerHTML = `Você está no peso ideal com ${ideal} pontos`
        res.style.color = 'green'
    }
    
    else if (ideal > 25 && ideal <= 30){
        res.innerHTML = `Você está com sobrepeso com ${ideal} pontos`
        res.style.color = '#b5ab00'
    }
    
    else if (ideal > 30 && ideal <= 40){
        res.innerHTML = `Você está com obesidade com ${ideal} pontos`
        res.style.color = 'red'
    } else {
        res.innerHTML = `Você está com obesidade mórbida com ${ideal} pontos`
        res.style.color = 'black'
    }
   
    
}
