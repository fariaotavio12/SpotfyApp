import FooterMusic from "@/components/ui/footerMusic";
import Music from "@/components/ui/music";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import  api from "@/lib/axios";
import { SpotifyTrack } from "@/lib/type/album";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

async function getTraks(params: string) {
  try {
    const response = await (await api)(`albums/${params}/tracks`);
    const artists = response.data;

    console.log(artists);

    return artists.items;
  } catch (error) {
    console.error("Error fetching artist:", error);
    // return null;
  }
}

const Album = ({}) => {
  const { id } = useParams();
  const audioRef = useRef();
  const { toast } = useToast()
  const [traks, setTraks] = useState<SpotifyTrack[] | undefined>(undefined);
  const [isActive, setIsActive] = useState<number | undefined>(undefined);
  const [pause, setPause] = useState(false);
  const fetchData = async (variavel: string) => {
    const fetchedArtists = await getTraks(variavel);
    setTraks(fetchedArtists);
  };

  useEffect(() => {
    if (id === undefined) return;
    fetchData(id);
  }, []);

  useEffect(() => {

    if(isActive == undefined){
      return
    }
    //@ts-ignore
    const currentTrack = traks && traks[isActive - 1];
  
    if (traks && traks[isActive -1] && traks[isActive - 1]?.preview_url) {
      if (audioRef.current) {
        if (pause) {
          //@ts-ignore
          audioRef.current.pause();
        } else {
          //@ts-ignore
          audioRef.current.play();
        }
      }
    } else {
      toast({
        variant: "destructive",
        title: `Não foi possivel reproduzir`,
      });
    }
  }, [pause, isActive]);

  return (
    <>
    <Toaster />
   
      <main className="w-full h-[calc(100vh-30px)] flex flex-col p-4 relative">
        <div className="w-full h-full flex flex-col items-center  pb-32 ">
          <div className="w-full flex g-4">
            <div className="flex-1 bg-dark text-light p-4 font-medium text-xl">
              # Titulo
            </div>
            <div className="flex-1 bg-dark text-light p-4 font-medium text-xl">
              Reproduções
            </div>
            <div className="flex-0  bg-dark text-light p-4 font-medium text-xl">
              Duração
            </div>
          </div>
          <div className="w-full grid grid-cols-1 gap-4 overflow-hidden">
            {traks?.map((item, index) => (
              <>
                <Music
                  key={index}
                  item={item}
                  isActive={isActive == item.track_number ? true : false}
                  onClickChange={(e: number) => {
                    setIsActive(e);
                    setPause(false);
                  }}
                  pause={pause}
                />
              </>
            ))}
          </div>
        </div>
       
        <FooterMusic onClick={() => setPause(!pause)} pause={pause} />
        {/* {isActive != undefined && traks[isActive ?? 0].preview_url} */}
        {/* {isActive?.toString()} */}

        {
        //@ts-ignore
        traks && traks[isActive -1] && traks[isActive -1]?.preview_url && (
          //@ts-ignore
          <audio ref={audioRef} src={traks[(isActive -1)].preview_url} />
        )}
      </main>
    </>
  );
};

export default Album;
