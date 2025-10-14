import { useState } from 'react'
import './CreateDrink.css'

export default function CreatDrink({creat}) {

    const [card, setCard] = useState({
        name: '',
        category: 'tea',
        description: '',
        src: ''
    })

    return(
        <details className='create-drink'>
            <summary>Create drink</summary>
            <input 
                type="text" 
                placeholder='Name' 
                value={card.name} 
                onChange={e => setCard({...card, name: e.target.value})}/>
            <select value={card.category} onChange={e => setCard({...card, category: e.target.value})}>
                <option value="tea">Tea</option>
                <option value="coffee">Coffee</option>
                <option value="juice">Juice</option>
            </select>
            <textarea 
                placeholder='Description' 
                value={card.description} 
                onChange={e => setCard({...card, description: e.target.value})}
            >             
            </textarea>
            <input 
                type="file" 
                id='file'
                onChange={e => setCard({...card, src: URL.createObjectURL(e.target.files[0])})}/>
            <button onClick={() => {
                creat(card),
                setCard({name: '', category: 'tea', description: '', src: ''})
            }}>Add Drink</button>
        </details>
    )
}