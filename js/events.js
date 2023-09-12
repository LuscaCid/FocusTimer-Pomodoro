import { Sounds } from "./sounds.js";
const player = Sounds()

export function events({
    minutes,
    displayMins,
    setTimeButton,
    buttonSoundOn,
    closeButtonCaixa,
    buttonSoundOff,
    caixaTimeFocus,
    caixaEndsUp,
    stopBox}){

    function setTimeToFocus(){
        setTimeButton.addEventListener('click',function(){
            player.playTouchTap()
            minutes = window.prompt('Quantos minutos?') || 0
            if(Number(minutes) < 10) displayMins.textContent = `0${minutes}`
            else document.querySelector("#minutes").innerText = `${minutes}`
            
        })
    }
    function closeEndsBox(){
        
        caixaEndsUp.addEventListener('click',()=>{
            player.playTouchTap()
            caixaEndsUp.classList.remove('open')
            caixaEndsUp.classList.add('close')
        })
    }

    function closeStopBox(){
        stopBox.addEventListener('click', ()=>{
            player.playTouchTap()
            stopBox.classList.add('close')
            stopBox.classList.remove('open')
        })
    }    

    function closeFocusTimeBox(){
        closeButtonCaixa.addEventListener('click', () => {
            player.playTouchTap()
            caixaTimeFocus.classList.add('close')
            caixaTimeFocus.classList.remove('open')
        })
    }
    
    function turnOffsound(){
        
        buttonSoundOff.addEventListener('click', function(){
            player.playTouchTap()
            player.pauseRaindrop()
            buttonSoundOn.classList.remove('hide')
            buttonSoundOff.classList.add('hide')
        })

    }
    function turnOnsound(){
        
        buttonSoundOn.addEventListener('click', function(){
            player.playTouchTap()
            player.playRaindrop()
            buttonSoundOn.classList.add('hide')
            buttonSoundOff.classList.remove('hide')
        })
    }
    
    return {
        setTimeToFocus,
        closeEndsBox,
        closeStopBox,
        closeFocusTimeBox,
        turnOffsound,
        turnOnsound
    }

}
/**
 * isso eh incrivel, ingecao de dependencias atraves de um objto
 * que vai sendo lancado para outro arquivo, mds, to encantado
 * 
 * 
*/