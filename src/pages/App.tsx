import { useEffect, useState } from 'react'
import Navbar from '../components/module/Navbar'
import { api } from '@/lib/axios'
import { SpotifySearchResponse } from '@/lib/type/artist'
import { useSearchParams } from 'react-router-dom'
import ArtistComponent from '@/components/ui/artist'
import imageNotFound from "@/assets/image/noData.png"
async function getArtist(params: string) {
  try {
    const response = await api.get(`search?q=${params}&type=artist&market=BR`);
    const artists = response.data.artists;
    console.log(artists);
    return artists;
  } catch (error) {
    console.error('Error fetching artist:', error);
    // return null;
  }
}


function App() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [artistas, setArtistas] = useState<SpotifySearchResponse | undefined>(undefined);

  const fetchData = async (variavel: string) => {
    const fetchedArtists = await getArtist(variavel);
    setArtistas(fetchedArtists);
  };

  useEffect(() => {
    let params = searchParams.get('search') ?? ''
    fetchData(params);
  }, []);


  useEffect(() => {
    let params = searchParams.get('search') ?? ''
    fetchData(params);
  }, [searchParams])



  return (
    <>
      <header className='w-ful h-20 flex items-center justify-center px-4'>
        <Navbar />
      </header>
      <main className='w-full h-auto flex items-center justify-center p-4 '>
        <div className=' w-full max-w-screen-2xl grid gap-4 overflow-hidden'>
          <h1 className='text-2xl font-medium'>Artistas</h1>
          {artistas?.items.length == 0 && <div className='w-full h-full min-h-[60vh] flex flex-col items-center justify-center gap-4'>
            <img src={imageNotFound} alt="Image not found" />
            <h1 className='text-2xl capitalize'>não identificamos nenhum artista</h1>
          </div>}
          <div className='w-full h-auto flex flex-row flex-wrap gap-6'>
            {artistas?.items.map((item, index) => (
              <ArtistComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
export default App
