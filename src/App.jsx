import { useState } from 'react'
import './styles/style.css'
import SearchBar from './components/SearchBar/SearchBar'
import CreatDrink from './components/CreateDrink/CreateDrink'
import HeroContent from './components/HeroContent/HeroContent'
import ThemeButton from './components/ThemeButton/ThemeButton'
import { data } from './data'


function App() {
  const [cardList, setCardList] = useState(data);
  const [drinkName, setDrinkName] = useState('')

  const createCard = (newCard) => {
    return setCardList([...cardList, newCard])
  }

  return (
    <div className="container">
        <header className='header'>
            <ThemeButton /> 
        </header> 
      <SearchBar search={setDrinkName} drinkName={drinkName} />
      <CreatDrink create={createCard} />
      <HeroContent cardList={cardList} drinkName={drinkName} />
    </div>
  )
}

export default App
