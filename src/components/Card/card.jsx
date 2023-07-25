import '../Card/card.scss'
import { Link } from 'react-router-dom'

function Card({title, cover, id}) {
    return (
        <article className='card'>
            <img src={cover} alt=""></img>
            <h2>{title}</h2>
            <Link to={`housing/${id}`}>Voir plus</Link>
        </article>
    )
}

export default Card