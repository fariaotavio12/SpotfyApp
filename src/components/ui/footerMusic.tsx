import iconePlay from "@/assets/icons/play.svg"
import iconePause from "@/assets/icons/pause.svg"
const FooterMusic = ({ onClick , pause } : { pause:boolean, onClick: () => void }) => {
    return <div className="w-full h-auto sticky bottom-0 bg-black flex items-center justify-center rounded p-4">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full" onClick={() => onClick()}>
            {pause ? <img src={iconePlay} alt="Play" /> : <img src={iconePause} alt="Pause" />}
          
        </div>
    </div>
}

export default FooterMusic