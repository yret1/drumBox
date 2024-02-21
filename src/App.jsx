import { useState, useEffect } from 'react'
import Instrum from "./Instrum"

function App() {

  const [display, setDisplay] = useState('')

const audioClips = [
  {key: 'Q', keyCode: 81, id: 'Heater-1', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'},
  {key: 'W', keyCode: 87, id: 'Heater-2', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'},
  {key: 'E', keyCode: 69, id: 'Heater-3', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'},
  {key: 'A', keyCode: 65, id: 'Heater-4', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'},
  {key: 'S', keyCode: 83, id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'},
  {key: 'D', keyCode: 68, id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'},
  {key: 'Z', keyCode: 90, id: "Kick-n'-Hat", url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'},
  {key: 'X', keyCode: 88, id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'},
  {key: 'C', keyCode: 67, id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'}
]

 const handleDisplay = (clicked) => {
    setDisplay(clicked)
 }

const playAudio = (e) => {
  const clip = audioClips.find(
    (clip) => clip.key === e.key.toUpperCase()

  )
  if (!clip) return
  document.getElementById(clip.key).play()
  setDisplay(clip.id)
}

useEffect(() => {
  document.addEventListener('keydown', playAudio)
  return () => {
    document.removeEventListener('keydown', playAudio)
  }
})



  return (
    <section id='drum-machine' className='h-screen w-screen bg-slate-600 flex flex-col justify-center items-center'>

      <h2>Drum Machine</h2>

      <section className='grid grid-cols-3 gap-4'>
        {audioClips.map((clip) => {
          return <Instrum key={clip.id} clip={clip} click={handleDisplay}    />
        })}
      </section>
      <p id='display'>{display}</p>
    </section>
  )
}

export default App
