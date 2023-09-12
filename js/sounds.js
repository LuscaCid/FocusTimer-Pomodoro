export function Sounds(){
    let dirRaindrops = "./bg-sounds/trullyRaindrops.wav"
    let dirTouchTaps = "./bg-sounds/tapbutton.wav"
    const raindrop = new Audio(dirRaindrops)
    const touchTap = new Audio(dirTouchTaps)
    raindrop.loop = true
    
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
        playTouchTap,
        playRaindrop,
        pauseRaindrop
    }
}    
    