import '../Card/card.scss'
import { Link } from 'react-router-dom'

// Fonction de création des cartes logement pour la page d'accueil
function Card({title, cover, id}) {
    return (
        <article className='card'>
            <img src={cover} alt="" loading='lazy'></img>
            <h2>{title}</h2>
            <Link to={`housing/${id}`}>Voir plus</Link>
        </article>
    )
}

export default Card