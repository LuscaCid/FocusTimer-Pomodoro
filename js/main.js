import {events} from './events.js'
import { PlayAndPauseEvents } from './playAndPauseEvents.js'
import { elements } from './htmlElement.js'
//desestruturacao de objeto no arquivo main para usar dos elementos

const {
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

} = elements

 
const configVariablesPrimaryEvents = {
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
}

const configVariablesSecondaryEvents = {
    minutes,
    displayMins,
    setTimeButton,
    buttonSoundOn,
    closeButtonCaixa,
    buttonSoundOff,
    caixaTimeFocus,
    caixaEndsUp,
    stopBox
}
const primaryEvents = PlayAndPauseEvents(configVariablesPrimaryEvents)
const Events = events(configVariablesSecondaryEvents)

Events.turnOffsound()//isso esta substituindo, mds q insano
Events.closeFocusTimeBox()
Events.closeStopBox()
Events.turnOnsound()
Events.setTimeToFocus()

primaryEvents.pauseButtonClick()
primaryEvents.stopButtonClick()
primaryEvents.runPlayButton()
