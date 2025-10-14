import './CardList.css'

export default function CardList({resultCardList}) {

    return(
        <section className='card-list'>
            {resultCardList.length ?
                resultCardList.map(card =>
                    <div className='card' key={card.name + Date.now()}>
                        <img src={card.src} alt={card.name} />
                        <p>{card.name}</p>
                    </div>
                )
                :
                <h2>Card isn't finded</h2> }
        </section>
    )
}