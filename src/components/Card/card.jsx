import '../Card/card.scss'
import { Link } from 'react-router-dom'

function Card({title, cover}) {
    return (
        <article className='card'>
            <img src={cover} alt=""></img>
            <h2>{title}</h2>
            <Link to=''></Link>
        </article>
    )
}

export default Card