import { useState } from 'react';
import Navbar from '../components/Navbar'; // Import the Navbar
import SearchBar from '@/components/SearchBar';
import SearchItem from '@/components/searched_items';
export default function Home() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (term) => {
        window.location.href = `/search?q=${term}`;
    };

    return (
        <>
             {/* Navbar is placed here */}
            
            <div className=" bg-texture-gradient bg-texture flex flex-col items-center justify-between space-y-20 h-[100vh]">
                <Navbar />
                {/* <div className='h-[80vh]'>
                     <SearchBar onSearch={handleSearch} /> 
                </div> */}
                <div className='h-[88vh]'>
                    
                    <SearchItem/>
                </div>
                
                
            </div>
        </>
    );
}
