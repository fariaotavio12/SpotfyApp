// import { Input } from ""

import Input from "@/components/ui/input"
import Icon from "../ui/icon/icon"
import iconSearch from "@/assets/icons/search.svg"
import { useEffect, useState } from "react";
import { debounce } from 'lodash';
import { useSearchParams } from "react-router-dom";

const Navbar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    let [searchParams, setSearchParams] = useSearchParams();
    const getSearchParams = () => {
        return searchParams.get('search') || ''
    };


    const debouncedSearch = debounce((term: any) => {
        searchParams.set('search', term);
        setSearchParams(searchParams)
      
    }, 500);


    useEffect(() => {
        setSearchTerm(getSearchParams());
    }, []);


    useEffect(() => {
        if(searchTerm == null || searchTerm == undefined || searchTerm.length <= 0){
            return
        }
        debouncedSearch(searchTerm);

        return () => debouncedSearch.cancel();
    }, [searchTerm, debouncedSearch]);

    const handleInputChange = (e: any) => {
        setSearchTerm(e.target.value);
    };
    return (
        <nav className="w-full max-w-screen-2xl ">
            <Input type="text" className="max-w-xs rounded-full" value={searchTerm} placeholder="Artistas , Musicas, Playlist" iconLeft={<Icon src={iconSearch} alt="pesquisa" />} onChange={handleInputChange} />
        </nav>
    )
}

export default Navbar