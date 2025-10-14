import './HeroContent.css'
import SideBar from '../SideBar/SideBar'
import CardList from '../CardList/CardList'
import { useMemo, useState } from 'react'

export default function HeroContent({cardList, drinkName}) {
    const [category, setCategory] = useState('all')

    var filteredList = useMemo(() => {
        return cardList.filter(el => {
            if(category === 'all') return el;
            return(el.category === category);
        })
    }, [cardList, category])
    
    var resultCardList = useMemo(() => {
        return filteredList.filter(card => 
            card.name.toLowerCase().includes(drinkName.toLowerCase())
        )
    }, [filteredList, drinkName])

    

    // var resultCardList = filteredList.filter(card => card.name.toLowerCase().includes(drinkName.toLowerCase()));

    return(
        <div className='hero-container'>
            <SideBar filter = {setCategory} category={category} />
            <CardList resultCardList={resultCardList} />
        </div>
    )
}