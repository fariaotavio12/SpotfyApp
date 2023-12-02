import api from "@/lib/axios";
import { Link, useParams } from "react-router-dom";
import { Artist as IpropsArtist } from "@/lib/type/artist";
import { useEffect, useState } from "react";
import imageNotFound from "@/assets/image/noData.png";
import { SpotifyAlbum } from "@/lib/type/album";
import Album from "@/components/ui/album";
import iconeArrow from "@/assets/icons/arrow.svg";

async function getArtist(params: string) {
  try {
    const response = await (await api)(`artists/${params}`);
    const artists = response.data;

    console.log(artists);

    return artists;
  } catch (error) {
    console.error("Error fetching artist:", error);
    // return null;
  }
}

async function getAlbuns(params: string) {
  try {
    const response = await (await api)(`artists/${params}/albums`);
    const artists = response.data.items;

    console.log(artists);

    return artists;
  } catch (error) {
    console.error("Error fetching artist:", error);
    // return null;
  }
}


const Artist = ({}) => {
  const { id } = useParams();
  const [artista, setArtista] = useState<IpropsArtist | undefined>(undefined);
  const [albums, setAlbums] = useState<SpotifyAlbum[] | undefined>(undefined);
  const fetchData = async (variavel: string) => {
    const fetchedArtists = await getArtist(variavel);
    setArtista(fetchedArtists);
  };
  const getAlbums = async (variavel: string) => {
    const fetchedAlbums = await getAlbuns(variavel);
    setAlbums(fetchedAlbums);
  };

  useEffect(() => {
    if (id === undefined) return;
    fetchData(id);
    getAlbums(id);
  }, []);

  return (
    <div>
      <main className="w-full h-auto flex items-center justify-center p-4 ">
        <div className=" w-full max-w-screen-2xl grid gap-4 overflow-hidden">
          {artista == undefined ? (
            <div className="w-full h-full min-h-[60vh] flex flex-col items-center justify-center gap-4">
              <img src={imageNotFound} alt="Image not found" />
              <h1 className="text-2xl capitalize">Artista nao encontrado</h1>
            </div>
          ) : (
            <div className="w-full h-auto flex flex-col gap-6">
              <div className="w-full h-auto overflow-hidden flex relative">
                <img
                  src={artista?.images[0]?.url ?? ""}
                  alt="Foto Artista"
                  className="w-full object-cover bg-center max-h-[40vh] rounded-xl"
                />
                <Link
                  to={"/"}
                  className="w-10 h-10 absolute top-4 left-4 bg-black rounded-full flex p-2 hover:opacity-10 transition-opacity items-center justify-center"
                >
                  <img src={iconeArrow} alt="Voltar" className="w-4 h-4" />
                </Link>
              </div>
              <h1 className="text-2xl font-medium">
                Àlbums de {artista?.name}{" "}
              </h1>
              <div className="w-full h-auto flex flex-row flex-wrap gap-6 justify-between">
                {albums?.map((item, index) => (
                  <Album key={index} Album={item} />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* {artistas?.href} */}
      </main>
    </div>
  );
};

export default Artist;
