import { Link } from "react-router-dom"
import '../Error/error.scss'

// Affiachage de la page d'erreur 404
function Error() {
    return (
        <main className="error-wrapper">
            <h1 className="error-title">404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            {/* Lien redirigeant vers la page Home */}
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error