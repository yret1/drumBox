const Instrum = (props) => {
    const {clip, click} = props


    const playSound = (sound) => {
        const audio = document.getElementById(sound.key)
        audio.play()


    }



    return (
        <button
        
         id={clip.id}
        onClick={() => {
            playSound(clip)
            click(clip.id)
        }}
         className="drum-pad w-10 h-10 flex justify-center items-center border-2 border-black rounded-md">
            <audio className="clip" src={clip.url} id={clip.key}></audio>
            {clip.key}
        </button>
    )
}


export default Instrum