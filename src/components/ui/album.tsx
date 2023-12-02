import { SpotifyAlbum } from "@/lib/type/album";
import { Link } from "react-router-dom";


function formatarData(data: string): string {
  // Verifica se a string de entrada está no formato esperado
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(data)) {
    return "No Date";
  }

  // Extrai o ano, mês e dia da string
  const [ano, mes, dia] = data.split("-");

  // Retorna a data formatada como DD/MM/AA
  return `${dia}/${mes}/${ano.slice(2)}`;
}

const Album = ({ Album }: { Album: SpotifyAlbum }) => {
  return (
    <Link
      to={`/album/${Album.id}`}
      className="flex-1 flex-shrink-0 w-full min-w-[280px] bg-black h-auto flex flex-col gap-4 p-4 overflow-hidden rounded max-sm:max-w-none hover:scale-105 transition-transform"
    >
      <img
        src={Album.images[0]?.url ?? ""}
        alt="Imagem"
        className="w-full object-contain aspect-square rounded"
      />

      <div className="w-full flex flex-col gap-4">
        <h1 className="text-lg">{Album.name}</h1>
        <h5 className="text-base text-gray-500">
          {formatarData(Album.release_date)|| " No Date"}
        </h5>
      </div>

      {/* {item.images[0]?.url ?? ""} */}
    </Link>
  );
};

export default Album;
