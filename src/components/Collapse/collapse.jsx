import { useState } from "react"
import openBtn from '../../assets/img/arrow-up.svg'
import '../Collapse/collapse.scss'

function Collapse({title, description}) {
    // Hook pour définir le state d'ouverture à fermé
    const [open, setOpen] = useState(false)

    //Fonction pour ouvrir le collapse
    const toggle = () => {
        setOpen(!open)
    };

    return (
        <div className="collapse">
            {/* Bouton d'ouverture du collapse avec onClick*/}
            <button className="collapse-bar" aria-expanded={open} onClick={toggle}>
                <h2 className="collapse-title">{title}</h2>
                <img className="collapse-arrow" src={openBtn} alt="Ouvrir ou fermer la description"/>
            </button>

            {/* Contenu intérieur de l'élément collapse */}
            <div className="collapse-wrapper">
                <div className="collapse-inner">
                    <div className="collapse-content">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collapse