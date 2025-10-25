import './CardList.css'
import Card from '../Card/Card'

export default function CardList({resultCardList}) {

    return(
        <>
            {resultCardList.length ?
                <section className='card-list'>
                {
                    resultCardList.map(card =>
                        <Card key={card.name + Date.now()} card={card}/>
                    )
                }
                </section>
            :
                <h2>Card isn't finded</h2>
            }
        </>
    )
}