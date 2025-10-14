import { useState } from 'react'
import './SideBar.css'

export default function SideBar({filter, category}) {
    const [onActive, setOnActive] = useState('all')

    const sidebarList = [
        'All',
        'Tea',
        'Coffee',
        'Juice'
    ]

    return(
        <aside className='sidebar'>
            <ul>
                {sidebarList.map((element, index) =>
                    <li key={element[index]}>
                        <button 
                            className={(category === element.toLowerCase()) ? ('active'): undefined}
                            onClick={() => filter(element.toLowerCase())}
                        >
                            {element}
                        </button>
                    </li>
                )}
            </ul>
        </aside>
    )
}

/* <li><button className={(onActive === 'all') && ('active')} onClick={e => {setOnActive('all'); filter('all')}}>All</button></li>
<li><button className={(onActive === 'tea') && ('active')} onClick={e => {setOnActive('tea'); filter('tea')}}>Tea</button></li>
<li><button className={(onActive === 'coffee') && ('active')} onClick={e => {setOnActive('coffee'); filter('coffee')}}>Coffee</button></li>
<li><button className={(onActive === 'juice') && ('active')} onClick={e => {setOnActive('juice'); filter('juice')}}>Juice</button></li> */