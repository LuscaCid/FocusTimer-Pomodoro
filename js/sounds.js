export function Sounds(){
    let dirRaindrops = "./bg-sounds/trullyRaindrops.wav"
    let dirTouchTaps = "./bg-sounds/tapbutton.wav"
    const raindrop = new Audio(dirRaindrops)
    const touchTap = new Audio(dirTouchTaps)
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
    
    raindrop.loop = true

    function playAlarm(){
        kitchenTimer.play()
    }
    function playTouchTap(){
        touchTap.play()
    }
    
    function playRaindrop(){
        raindrop.play()
    }
    function pauseRaindrop(){
        raindrop.pause()
    }
    return {
        playAlarm,
        playTouchTap,
        playRaindrop,
        pauseRaindrop
    }
}    
    
