function contar(){
    let inicio0 = document.getElementById('inicio')
    let inicio = Number(inicio0.value)
    
    let fim0 = document.getElementById('fim')
    let fim = Number(fim0.value)
    
    let passo0 = document.getElementById('passo')
    let passo = Number(passo0.value)
    
    let res = document.getElementById('prepcont')
    
    let res1 = ''
    
    if (passo == 0){
        alert('Passo receberá 1')
        passo = 1
    }

    for (inicio; inicio <= fim ; inicio += passo){
        res1 += ' 👉 ' + inicio 
    }
    
    res.innerText = res1 + ' 🏁'
    
}
