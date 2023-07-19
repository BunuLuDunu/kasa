import { Link } from "react-router-dom"
import '../Error/error.scss'

function Error() {
    return (
        <main className="error-wrapper">
            <h1 className="error-title">404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </main>
    )
}

export default Error