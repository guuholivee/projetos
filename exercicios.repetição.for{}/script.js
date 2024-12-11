function contar(){
    let ini= document.getElementById(`txti`)
    let fim= document.getElementById(`txtf`)
    let pas= document.getElementById(`txtp`)
    let res= document.getElementById(`res`)
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
       window.alert(`[ERRO!!] faltam dados!`)
       res.innerHTML = `Impossivel contar!`
    } else {
        res.innerHTML=`contando:`
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(p <= 0){
            window.alert(`passo invalido! considerando passo 1 !`)
            p = 1
        }
        if (i < f) {
            //CONTAGEM CRESCENTE
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c}\u{1f449}`
            }
        } else
            //contagem REGRESSIVA
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c}\u{1f449}`
        }
        
    } res.innerHTML +=`\u{1f3c1}`
}