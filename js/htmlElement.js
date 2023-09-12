const playButton = document.querySelector(".play")
const pausebutton = document.querySelector('.pause')
const setTimeButton = document.querySelector('.set')
const stopButton = document.querySelector('.stop')
const buttonSoundOn = document.querySelector(".sound-off")
const closeButtonCaixa = document.querySelector('.focus .close')
const buttonSoundOff = document.querySelector('.sound-on')
const caixaTimeFocus = document.querySelector('.caixa, .caixa1,stopBox')
const caixaEndsUp = document.querySelector('.caixa1')
const stopBox = document.querySelector('.stopBox')
let displayMins = document.querySelector("#minutes")
let displaySecs = document.querySelector('#secconds')
let pausado = false
let tempoRodando = false
let minutes


export const elements= {
    playButton,
    pausebutton,
    setTimeButton,
    stopButton,
    buttonSoundOn,
    closeButtonCaixa,
    buttonSoundOff,
    caixaTimeFocus,
    caixaEndsUp,
    stopBox,
    displayMins,
    displaySecs,
    pausado,
    tempoRodando,
    minutes,
}
    