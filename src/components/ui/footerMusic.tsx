import iconePlay from "@/assets/icons/play.svg"
import iconePause from "@/assets/icons/pause.svg"
const FooterMusic = ({ onClick , pause } : { pause:boolean, onClick: () => void }) => {
    return <div className="w-full h-auto sticky bottom-0 bg-black flex items-center justify-center rounded p-4 max-sm:p-2">
        <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full max-sm:w-12 max-sm:h-12 " onClick={() => onClick()}>
            {pause ? <img src={iconePlay} alt="Play" /> : <img src={iconePause} alt="Pause" />}
          
        </div>
    </div>
}

export default FooterMusic