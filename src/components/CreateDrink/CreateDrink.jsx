import { useRef, useState } from 'react'
import './CreateDrink.css'

export default function CreatDrink({create}) {
    const inputRef = useRef(null);

    const [card, setCard] = useState({
        name: '',
        category: 'tea',
        description: '',
        src: '../../../public/no-drink.png'
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
                ref={inputRef}
                onChange={e => setCard({...card, src: (e.target.files && URL.createObjectURL(e.target.files[0]))})}/>
            <button onClick={() => {
                create(card);
                inputRef.current.value='';
                setCard({name: '', category: 'tea', description: '', src: '../../../public/no-drink.png'})
            }}>Add Drink</button>
        </details>
    )
}