import { Link } from "react-router-dom";
import { Artist } from "@/lib/type/artist";

const ArtistComponent = ({ item }: { item: Artist }) => {
  return (
    <Link
      to={`/artist/${item.id}`}
      className="flex-1 flex-shrink-0 w-full min-w-[280px] bg-black h-auto flex flex-col gap-4 p-4 overflow-hidden rounded max-sm:max-w-none"
    >
      <img
        src={item.images[0]?.url ?? ""}
        alt="Imagem"
        className="w-full object-contain aspect-square rounded"
      />

      <div className="w-full flex flex-col gap-4">
        <h1 className="text-lg">{item.name}</h1>
        <h5 className="text-base text-gray-500">
          {item.genres || " No Generes"}
        </h5>
      </div>

      {/* {item.images[0]?.url ?? ""} */}
    </Link>
  );
};

export default ArtistComponent;
