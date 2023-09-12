import { Sounds } from "./sounds.js";
const player = Sounds()
export function PlayAndPauseEvents({
    stopBox,
    caixaTimeFocus,
    setTimeButton,
    stopButton,
    displayMins,
    displaySecs,
    playButton,
    pausebutton,
    pausado,
    tempoRodando,
    caixaEndsUp
}){
    
    function runPlayButton(){
        playButton.addEventListener('click', handlePlay)
        
    }

    function countDown(){
        setTimeout(function(){
            if (pausado == true)return;
            if(Number(displaySecs.textContent) > 0 || Number(displayMins.textContent) > 0){    
                if(Number(displaySecs.textContent) == 0 && Number(displayMins.textContent) > 0)  {
                    if(Number(displayMins.textContent) < 11) displayMins.textContent = `0${Number(displayMins.textContent) - 1}`
                    else displayMins.textContent = Number(displayMins.textContent) - 1
                
                    displaySecs.innerText= 60
                }
                if(Number(displaySecs.textContent) < 11) displaySecs.textContent = `0${Number(displaySecs.textContent) - 1}`
                else{displaySecs.textContent = Number(displaySecs.textContent) - 1}
                
                if(Number(displayMins.textContent) == 0 && Number(displaySecs.textContent) == 0){
                    toggleBtnPlayToPause()
                    toggleBtnSetToStop()
                    
                    caixaEndsUp.classList.add('open')
                    setTimeout(()=>{
                        caixaEndsUp.classList.remove('open')
                        caixaEndsUp.classList.add('close')
                    }, 5000)
                    
                    return;
                }
                countDown()
    
            }
            else{
                toggleBtnPlayToPause()
                stopButton.classList.add('hide')
                setTimeButton.classList.remove('hide')
                tempoRodando = false
            }         
        }, 1000)
        
    }

    function handlePlay(){
        player.playTouchTap()
        pausado = false;
        if(!tempoRodando){
            toggleBtnSetToStop()
            tempoRodando=true
        }
        toggleBtnPlayToPause()
        caixaTimeFocus.classList.add('open')
        setTimeout( function(){
            caixaTimeFocus.classList.remove('open')
            caixaTimeFocus.classList.add('close')
            
        },4000)
        
        setTimeout(caixaTimeFocus.classList.remove('close'),3000)
        countDown()
    
    }

    //pause section
    function pauseButtonClick(){
        pausebutton.addEventListener('click', handlePause)
    }

    function stopButtonClick(){
        stopButton.addEventListener('click', function(){
            player.playTouchTap()
            pausebutton.classList.add('hide')
            playButton.classList.remove('hide')
            stopButton.classList.add('hide')
            setTimeButton.classList.remove('hide')
            displayMins.textContent = 25
            tempoRodando = false
            pausado = true
            displayMins.textContent = 25;
            displaySecs.textContent = `00`
            stopBox.classList.add('open')
            setTimeout(()=>{
                stopBox.classList.remove('open')
                stopBox.classList.add('close')
            },5000)
        
        })
    }
        
    function handlePause(){
        player.playTouchTap()
        toggleBtnPlayToPause()
        pausado = true
    }

    function toggleBtnSetToStop(){
        setTimeButton.classList.toggle("hide")
        stopButton.classList.toggle('hide')
    }
    function toggleBtnPlayToPause(){
        playButton.classList.toggle("hide")
        pausebutton.classList.toggle("hide")
    }
    return {
        pauseButtonClick,
        runPlayButton,
        stopButtonClick,
    }
}