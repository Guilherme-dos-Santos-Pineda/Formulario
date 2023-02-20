var stepUm = document.querySelector(".StepUm")
var StepDois = document.querySelector(".StepDois")
var StepTres = document.querySelector(".StepTres")
var StepQuatro = document.querySelector(".StepQuatro")
var botao = document.querySelector(".botao")
var botaoDois = document.querySelector(".botaoDois")
var botaoVoltar = document.querySelector(".botaoVoltar")
var botaoVoltarDois = document.querySelector(".botaoVoltarDois")
var botaoStepTres = document.querySelector(".botaoStepTres")
var botaoStepQuatro = document.querySelector(".botaoStepQuatro")
var botaoVoltarTres = document.querySelector(".botaoVoltarTres")
var liga = document.querySelector(".liga")
var desliga = document.querySelector(".desliga")
var btn = document.querySelector(".btn")
var imgBtn = document.querySelector(".imgBtn")
var monthsFree = document.querySelectorAll(".monthsFree")
var arcade = document.querySelector(".arcade")
var advanced = document.querySelector(".advanced")
var pro = document.querySelector(".pro")
var onlineService = document.querySelector(".oS")
var largeStorage = document.querySelector(".lS")
var custmizProfile = document.querySelector(".cP")
var divDosInputs = document.querySelector(".divDosInputs")
var sideBar = document.querySelector(".sidebar")
var divTres = document.querySelector(".divTres")
var cboxUM = document.querySelector("#cboxUM")
var cboxDOIS = document.querySelector("#cboxDOIS")
var cboxTRES = document.querySelector("#cboxTRES")
var tituloDisplay = document.querySelector(".tituloDisplay")
var displayValor = document.querySelector(".displayValor")
var tituloDisplayOpcUM = document.querySelector(".tituloDisplayOpcUM")
var tituloDisplayOpcDOIS = document.querySelector(".tituloDisplayOpcDOIS")
var tituloDisplayOpcTRES = document.querySelector(".tituloDisplayOpcTRES")
var valorOpcUM = document.querySelector(".valorOpcUM")
var valorOpcDOIS = document.querySelector(".valorOpcDOIS")
var valorOpcTRES = document.querySelector(".valorOpcTRES")
var titulorResult = document.querySelector(".titulorResult")
var resultadoFinal = document.querySelector(".resultadoFinal")
var agradecimento = document.querySelector(".agradecimento")
var soma;

// serviços da pagina 2
var arc = 9
var adv = 0
var prro = 0
// serviços da pagina 3
var onServ = 0
var lStg = 0
var customProf = 0
// sidebar
var activeSidebar = 0
var a = 0


    // EVENTO PARA MUDAR DA PAGINA 1 PARA A 2 E VICE-VERÇA COMEÇO

        botao.addEventListener("click",(e)=>{
            stepUm.style.display = "none"       //mudando o step 1 para o 2
            StepDois.style.display = "flex"
            activeSidebar = 2
            
            if(activeSidebar === 2){
                // mudando a sidebar
                sideBar.children[1].classList.add("active")
                sideBar.children[0].classList.remove('active')      
                activeSidebar = 3
            }
        })

        botaoVoltar.addEventListener("click",(e)=>{
            stepUm.style.display = "flex"      //mudando o step 2 para o 1
            StepDois.style.display = "none "
            activeSidebar = 1
            if(activeSidebar === 1){
                // mudando a sidebar
                sideBar.children[0].classList.add("active")
                sideBar.children[1].classList.remove('active')
            }
        })
    // EVENTO PARA MUDAR DA PAGINA 1 PARA A 2 E VICE-VERÇA FIM

    // EVENTO PARA MUDAR DA PAGINA 2 PARA A 3 E VICE-VERÇA COMEÇO
    botaoDois.addEventListener('click', ()=>{

        StepDois.style.display = "none"
        StepTres.style.display = "flex"      //mudando o step 2 para o 3
        activeSidebar = 3

        if(activeSidebar === 3){
            // mudando a sidebar
            sideBar.children[2].classList.add("active")
            sideBar.children[1].classList.remove('active')      
            activeSidebar = 4
        }
    })

    botaoVoltarDois.addEventListener("click", ()=>{
        StepTres.style.display = "none"      //mudando o step 3 para o 2
        StepDois.style.display = "flex"
        activeSidebar = 2

        if(activeSidebar === 2){
            // mudando a sidebar
            sideBar.children[1].classList.add("active")
            sideBar.children[2].classList.remove('active')
        }
    })

        // EVENTO PARA MUDAR DA PAGINA 3 PARA A 4 E VICE-VERÇA COMEÇO
        botaoStepTres.addEventListener('click', ()=>{
            console.log(4)
            StepTres.style.display = "none"
            StepQuatro.style.display = "flex"      //mudando o step 3 para o 4
            activeSidebar = 4
    
            if(activeSidebar === 4){
                // mudando a sidebar
                sideBar.children[3].classList.add("active")
                sideBar.children[2].classList.remove('active')      
                activeSidebar = 5
            }
            callback()      
        })
    
        botaoVoltarTres.addEventListener("click", ()=>{
            StepQuatro.style.display = "none"      //mudando o step 4 para o 3
            StepTres.style.display = "flex"
            activeSidebar = 3
    
            if(activeSidebar === 3){
                // mudando a sidebar
                sideBar.children[2].classList.add("active")
                sideBar.children[3].classList.remove('active')
            }
        })



    // EVENTO PARA MUDAR O BOTÃO E PREÇO MENSAL E ANUAL COMEÇO pg 2

    divTres.addEventListener('click', (e)=>{
        var elemento = e.target.closest("div")
        elemento.classList.toggle('planoAtivado') // ativa a borda
        if(elemento.classList.contains("planoAtivado")){            
            console.log(elemento.children[1].children[1].innerText)

            if(elemento.children[1].children[1].innerText == "$9/mo"){
                console.log("é arcade mensal")
                arc = 9
            }
            if(elemento.children[1].children[1].innerText == "$90/yr"){
                console.log("é arcade anual")
                arc = 90
            }
            //verificando se é mensal ou anual
            if(elemento.children[1].children[1].innerText == "$12/mo"){
                console.log("é Advanced mensal")
                adv = 12
            }
            if(elemento.children[1].children[1].innerText == "$120/yr"){
                console.log("é Advanced anual")
                adv = 120
            }
            //verificando se é mensal ou anual Plano Pro
            if(elemento.children[1].children[1].innerText == "$15/mo"){
                console.log("é Pro mensal")
                prro = 15
            }
            if(elemento.children[1].children[1].innerText == "$150/yr"){
                console.log("é Pro anual")
                prro = 150
            }
        }else{
            console.log("Nao tem")
            if(elemento.children[1].children[1].innerText == "$9/mo"){
                arc = 0
            }
            if(elemento.children[1].children[1].innerText == "$90/yr"){
                console.log("é arcade anual")
                arc = 0
            }//zerando 
            if(elemento.children[1].children[1].innerText == "$12/mo"){
                console.log("é Advanced mensal")
                adv = 0
            }
            if(elemento.children[1].children[1].innerText == "$120/yr"){
                console.log("é Advanced anual")
                adv = 0
            }//zerando
            if(elemento.children[1].children[1].innerText == "$15/mo"){
                console.log("é Pro mensal")
                prro = 0
            }
            if(elemento.children[1].children[1].innerText == "$150/yr"){
                console.log("é Pro anual")
                prro = 0
            }
        }
    })

imgBtn.addEventListener("click",(e)=>{
    if(a === 0){
        e.target.src = "./assets/icones/toggle-on-solid.svg"

            e.target.parentElement.children[2].classList.add("anoAtivado")
            e.target.parentElement.children[0].classList.add("mesDesativado")
            for(var i = 0; i < monthsFree.length; i++){
                monthsFree[i].style.display = "block"
                arcade.innerText = "$90/yr"
                advanced.innerText = "$120/yr"
                pro.innerText = "$150/yr"

                onlineService.innerText = "+$10/yr"
                largeStorage.innerText = "+$20/yr"
                custmizProfile.innerText = "+$20/yr"
            }
        let zerar = e.target.parentElement.parentElement.parentElement.children[1].children

        zerar[0].classList.remove("planoAtivado")
        zerar[1].classList.remove("planoAtivado")
        zerar[2].classList.remove("planoAtivado")
        arc = 0
        adv = 0
        prro = 0

        divDosInputs.children[0].classList.remove('inputStepTresActive')
        divDosInputs.children[1].classList.remove('inputStepTresActive')
        divDosInputs.children[2].classList.remove('inputStepTresActive')

        cboxUM.checked = false
        cboxDOIS.checked = false
        cboxTRES.checked = false
        onServ = 0
        lStg = 0
        customProf = 0

        a = 1
    }else{
        e.target.src = "./assets/icones/toggle-off-solid.svg"
        e.target.parentElement.children[2].classList.remove("anoAtivado")
        e.target.parentElement.children[0].classList.remove("mesDesativado")
        for(var i = 0; i < monthsFree.length; i++){
            monthsFree[i].style.display = "none"
            arcade.innerText = "$9/mo"
            advanced.innerText = "$12/mo"
            pro.innerText = "$15/mo"

            onlineService.innerText = "+$01/mo"
            largeStorage.innerText = "+$02/mo"
            custmizProfile.innerText = "+$02/mo"
        }
        let zerar = e.target.parentElement.parentElement.parentElement.children[1].children
        zerar[0].classList.remove("planoAtivado")
        zerar[1].classList.remove("planoAtivado")
        zerar[2].classList.remove("planoAtivado")
        arc = 0
        adv = 0
        prro = 0

        divDosInputs.children[0].classList.remove('inputStepTresActive')
        divDosInputs.children[1].classList.remove('inputStepTresActive')
        divDosInputs.children[2].classList.remove('inputStepTresActive')

        cboxUM.checked = false
        cboxDOIS.checked = false
        cboxTRES.checked = false
        onServ = 0
        lStg = 0
        customProf = 0

        a = 0
    }
})


    // EVENTO PARA MUDAR O BOTÃO E PREÇO MENSAL E ANUAL COMEÇO pg 3

divDosInputs.addEventListener("click", (e)=>{
    if(e.target.closest("div").classList.contains("cbox")){
        e.target.closest("div").parentElement.classList.toggle("inputStepTresActive");       
        let inpts = e.target.parentElement.parentElement.children[2].innerText
        let numero = Number(inpts.substr(2,2))

        if(cboxUM.checked == true && a == 0){
            onServ = 1
            console.log("O numero do On servicve é " + onServ)
            tituloDisplayOpcUM.innerText = 'Online Services'
            valorOpcUM.innerText = '+$1/mo'  
         
        }if(cboxUM.checked == true && a == 1){
            onServ = 10
            console.log("O numero do On servicve é " + onServ)
            tituloDisplayOpcUM.innerText = 'Online Services'
            valorOpcUM.innerText = '+$10/yr'    
        }if(cboxUM.checked == false){
            onServ = 0
            tituloDisplayOpcUM.innerText = ''
            valorOpcUM.innerText = '' 
        }

        if(cboxDOIS.checked == true && a == 0){
            lStg = 2
            console.log("O numero do large storage é " + lStg)
            tituloDisplayOpcDOIS.innerText = 'Larger Storage'
            valorOpcDOIS.innerText = '+$2/mo'      
        }if(cboxDOIS.checked == true && a == 1){
            lStg = 20
            console.log("O numero do large storage é " + lStg)
            tituloDisplayOpcDOIS.innerText = 'Larger Storage'
            valorOpcDOIS.innerText = '+$20/yr'    
        }if(cboxDOIS.checked == false){
            lStg = 0
            tituloDisplayOpcDOIS.innerText = ''
            valorOpcDOIS.innerText = '' 
        }

        if(cboxTRES.checked == true && a == 0){
            customProf = 2
            console.log("O numero do Customizable profile é " + customProf)
            tituloDisplayOpcTRES.innerText = 'Customizable profile'
            valorOpcTRES.innerText = '+$2/mo'    
        }if(cboxTRES.checked == true && a == 1){
            customProf = 20
            console.log("O numero do Customizable profile é " + customProf)
            tituloDisplayOpcTRES.innerText = 'Customizable profile'
            valorOpcTRES.innerText = '+$20/mo'    
        }if(cboxTRES.checked == false){
            customProf = 0
            tituloDisplayOpcTRES.innerText = ''
            valorOpcTRES.innerText = ''  
        }
        if(cboxUM.checked == false && cboxDOIS.checked == false && cboxTRES.checked == false){
            tituloDisplayOpcDOIS.innerText = 'No Services Add'
            valorOpcDOIS.innerText = ''
        }
        // mudr conforme o ano ou mes
        
    }
})


    // TELA 4 E CALCULOS GERAIS

    function callback(){
        if(arc == 9){
            tituloDisplay.innerText = 'Arcade (Monthly)'
            displayValor.innerText = '$9/mo'
            botaoStepQuatro.disabled = false
        }if(arc == 90){
            tituloDisplay.innerText = 'Arcade (Yearly)'
            displayValor.innerText = '$90/yr'
            botaoStepQuatro.disabled = false
        }

        if(adv == 12){
            tituloDisplay.innerText = 'Advanced (Monthly)'
            displayValor.innerText = '$12/mo'
            botaoStepQuatro.disabled = false
        }if(adv == 120){
            tituloDisplay.innerText = 'Advanced (Yearly)'
            displayValor.innerText = '$120/yr'
            botaoStepQuatro.disabled = false
        }

        if(prro == 15){
            tituloDisplay.innerText = 'Pro (Monthly)'
            displayValor.innerText = '$15/mo'
            botaoStepQuatro.disabled = false
        }if(prro == 150){
            tituloDisplay.innerText = 'Pro (Yearly)'
            displayValor.innerText = '$150/yr'
            botaoStepQuatro.disabled = false
        }

        if(arc == 9 && adv == 12){
            tituloDisplay.innerText = 'Arcade + Advanced (Monthly)'
            displayValor.innerText = '$21/mo'
            botaoStepQuatro.disabled = false
        }
        if(arc == 9 && prro == 15){
            tituloDisplay.innerText = 'Arcade + Pro (Monthly)'
            displayValor.innerText = '$24/mo'
            botaoStepQuatro.disabled = false
        }
        if(adv == 12 && prro == 15){
            tituloDisplay.innerText = 'Advanced + Pro (Monthly)'
            displayValor.innerText = '$27/mo'
            botaoStepQuatro.disabled = false
        }
        if(arc == 9 && adv == 12 && prro == 15){
            tituloDisplay.innerText = 'Arcade + Advanced + Pro (Monthly)'
            displayValor.innerText = '$36/mo'
            botaoStepQuatro.disabled = false
        }


        if(arc == 90 && adv == 120){
            tituloDisplay.innerText = 'Arcade + Advanced (Yearly)'
            displayValor.innerText = '$210/mo'
            botaoStepQuatro.disabled = false
        }
        if(arc == 90 && prro == 150){
            tituloDisplay.innerText = 'Arcade + Pro (Yearly)'
            displayValor.innerText = '$240/mo'
            botaoStepQuatro.disabled = false
        }
        if(adv == 120 && prro == 150){
            tituloDisplay.innerText = 'Advanced + Pro (Yearly)'
            displayValor.innerText = '$270/mo'
            botaoStepQuatro.disabled = false
        }
        if(arc == 90 && adv == 120 && prro == 150){
            tituloDisplay.innerText = 'Arcade + Advanced + Pro (Yearly)'
            displayValor.innerText = '$360/mo'
            botaoStepQuatro.disabled = false
        }
        if(arc == 0 && adv == 0 && prro == 0){
            tituloDisplay.innerText = 'Select Plan'
            displayValor.innerText = '$0/mo'
            botaoStepQuatro.disabled = true
    
        }
        if(botaoStepQuatro.disabled == true){
            botaoStepQuatro.style.backgroundColor = "gray"
        }
        if(botaoStepQuatro.disabled == false){
            botaoStepQuatro.style.background = "var(--PurplishBlue)"
            botaoStepQuatro.addEventListener("click",()=>{
            agradecimento.style.display = 'flex'
            StepQuatro.style.display = 'none'
            })
        }
        soma = onServ + lStg + customProf + arc + adv + prro
        if(a == 1){
            console.log('ano')
            resultadoFinal.innerHTML = `+$${soma}/yr`
            titulorResult.innerText = `Total (per year)`
        }if(a == 0){
            console.log('mes')
            resultadoFinal.innerHTML = `+$${soma}/mo`
            titulorResult.innerText = `Total (per month)`
        }

    }

