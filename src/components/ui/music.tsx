import { SpotifyTrack } from "@/lib/type/album";
import { cn } from "@/lib/utils";

function formatDuration(milliseconds: number) {
  if (!milliseconds || +milliseconds < 0 || isNaN(milliseconds) || milliseconds == undefined) {
    return "00:00";
  }

  if (isNaN(milliseconds) || milliseconds < 0) {
    return "00:00";
  }

  const totalSeconds = Math.floor(milliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const formatTwoDigits = (num: number) => (num < 10 ? `0${num}` : num);

  if (hours > 0) {
    return `${formatTwoDigits(hours)}:${formatTwoDigits(
      minutes
    )}:${formatTwoDigits(seconds)}`;
  } else {
    return `${formatTwoDigits(minutes)}:${formatTwoDigits(seconds)}`;
  }
}

const Music = ({
  item,
  isActive,
  onClickChange,
}: {
  item: SpotifyTrack;
  isActive: boolean;
  onClickChange: (e: number) => void;
  pause: boolean;
}) => {
  

  return (
    <div
      className={cn(
        "w-full h-auto bg-gray-800 text-light p-4 font-medium text-xl flex rounded cursor-pointer",
        isActive ? "bg-gray-900" : ""
      )}
      onClick={() => onClickChange(item.track_number)}
    >
      <div className="flex-1 flex items-center">
        <p className="mr-4">{item.track_number}</p>
        <div className="flex flex-col g-4">
          <p className="text-2xl max-sm:text-base text-ellipsis overflow-hidden truncate">{item.name}</p>
          <p className="text-gray-400 text-lg max-sm:text-base">{item.artists[0].name}</p>
        </div>
      </div>
      <p className="flex-1 max-sm:text-base">{""}</p>
      <p className="flex-0 max-sm:text-base">{formatDuration(item.duration_ms ?? 0)}</p>
      
    </div>
  );
};

export default Music;
