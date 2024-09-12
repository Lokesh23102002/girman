// components/SearchItem.js
import React from 'react';
import { CardWithForm } from './descriptioncard';


const SearchItem = () => {
    return (
        
        <div className="p-4 mt-1 h-full overflow-y-auto scrollbar-hide">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
                    <CardWithForm/>
                ))}
            </div>
    
        </div>
    );
       
};

export default SearchItem;
