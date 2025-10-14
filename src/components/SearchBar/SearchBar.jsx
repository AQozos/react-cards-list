import './SearchBar.css'
import { useState } from 'react'

export default function SearchBar({search, drinkName}) {

    return(
        <input 
            type="text" 
            placeholder="Search drinks" 
            className='search-bar'
            value={drinkName}
            onChange={e => 
                search(e.target.value)
            }
        />
    )
}