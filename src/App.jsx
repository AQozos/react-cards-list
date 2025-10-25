import { useState } from 'react'
import './styles/style.css'
import SearchBar from './components/SearchBar/SearchBar'
import CreatDrink from './components/CreateDrink/CreateDrink'
import HeroContent from './components/HeroContent/HeroContent'
import ThemeButton from './components/ThemeButton/ThemeButton'

const array = [
        {
            name: 'Black tea',
            category: 'tea',
            description: 'This tea is really dellicius',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbkN3ac32LtbkSarTBA_ppldBkTgGJspjDpA&s'
        },
        {
            name: 'Green tea',
            category: 'tea',
            description: 'This tea is really dellicius',
            src: 'https://www.rusteaco.ru/upload/medialibrary/ba3/ba3a1e3b007ef9e68a9859d9995c1a56.jpg'
        },
        {
            name: 'Earl Grey',
            category: 'tea',
            description: 'This tea is really dellicius',
            src: 'https://candlescience.ru/wp-content/uploads/2024/06/C80A9D68-33F8-4E49-8C7F-119698541021_540x-optimized.webp'
        },
        {
            name: 'Matcha',
            category: 'tea',
            description: 'This tea is really dellicius',
            src: 'https://www.coffeeproject.ru/images/products/chaj/203-description-3.jpg'
        },
        {
            name: 'White tea',
            category: 'tea',
            description: 'This tea is really dellicius',
            src: 'https://domhu.ru/test/white-tea4.jpg'
        },
        {
            name: 'Oolong',
            category: 'tea',
            description: 'This tea is really dellicius',
            src: 'https://teatrading.ru/wa-data/public/blog/img/teatrading_turquoise_tea_light_realistic_photo_canon_ef-s_18-55_48d785ff-198b-40f9-925d-62c18797c2ba.png'
        },
        {
            name: 'Espresso',
            category: 'coffee',
            description: 'This tea is really dellicius',
            src: 'https://westcupgroup.com/wp-content/uploads/2020/06/1_4FzJWow3qJOV_O-3iKgBOw.jpeg'
        },
        {
            name: 'Cappuccino',
            category: 'coffee',
            description: 'This tea is really dellicius',
            src: 'https://static.insales-cdn.com/files/1/4789/5149365/original/%D0%BA%D0%B0%D0%BF%D1%83%D1%87%D0%B8%D0%BD%D0%BE-01.jpg'
        },
        {
            name: 'Latte',
            category: 'coffee',
            description: 'This tea is really dellicius',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS58FdYUGWfllusPAmXLSjWLv4W9Qxms2ybMg&s'
        },
        {
            name: 'Americano',
            category: 'coffee',
            description: 'This tea is really dellicius',
            src: 'https://procofe.by/application/files/cache/thumbnails/kofe-i-kofejnye-zerna-1320x880-2aae60c0de5ef176c938a1ebee1decdd.jpg'
        },
        {
            name: 'Mocha',
            category: 'coffee',
            description: 'This tea is really dellicius',
            src: 'https://coffeeroom.by/wp-content/uploads/2024/07/krotov_studio_mocha_recipe_chocolate_and_coffee_in_one_drink_f99bb840-65ac-44b0-b29a-6ced74837f81.jpg'
        },
        {
            name: 'Frappuccino',
            category: 'coffee',
            description: 'This tea is really dellicius',
            src: 'https://icdn.lenta.ru/images/2024/06/26/12/20240626120040054/preview_2063a49b73d3417d43bb36a891854d07.jpg'
        },
        {
            name: 'Orange juice',
            category: 'juice',
            description: 'This tea is really dellicius',
            src: 'https://troika-cond.ru/upload/iblock/4f8/0r3yquxr7wu2v89k76vpe8fj7v31t2go/2024_09_13_15_44_34.png'
        },
        {
            name: 'Apple juice',
            category: 'juice',
            description: 'This tea is really dellicius',
            src: 'https://img.freepik.com/premium-photo/apple-juice-green-apples-summer_770123-9801.jpg'
        },
        {
            name: 'Carrot juice',
            category: 'juice',
            description: 'This tea is really dellicius',
            src: 'https://img.freepik.com/premium-photo/glass-tasty-carrot-juice-wooden-board_392895-19112.jpg'
        },
        {
            name: 'Pomegranate juice',
            category: 'juice',
            description: 'This tea is really dellicius',
            src: 'https://ss.sport-express.ru/userfiles/materials/197/1972128/full.jpg'
        },
        {
            name: 'Cranberry juice',
            category: 'juice',
            description: 'This tea is really dellicius',
            src: 'https://img.freepik.com/premium-photo/cranberry-juice-with-honey-cup-cranberries-sugar-dark-wooden-table-close-up_130040-1013.jpg'
        },
        {
            name: 'Mango juice',
            category: 'juice',
            description: 'This tea is really dellicius',
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK-O3DevFQ-4kQhgVpPkovHfWnlcwNv5cGEg&s'
        }
    ];

function App() {
  const [cardList, setCardList] = useState(array);
  const [drinkName, setDrinkName] = useState('')

  const createCard = (newCard) => {
    return setCardList([...cardList, newCard])
  }

  return (
    <div className="container">
      <ThemeButton />  
      <SearchBar search={setDrinkName} drinkName={drinkName} />
      <CreatDrink create={createCard} />
      <HeroContent cardList={cardList} drinkName={drinkName} />
    </div>
  )
}

export default App
