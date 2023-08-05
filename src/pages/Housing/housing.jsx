import { useParams } from "react-router-dom";
import '../Housing/housing.scss';
import { useEffect, useState } from "react";
import Error404 from '../Error/error.jsx';
import Carousel from "../../components/Carousel/carousel.jsx";
import Collapse from "../../components/Collapse/collapse.jsx";
import Rating from "../../components/Rating/rating.jsx";

function Housing() {
    // Fetch pour récupérer les datas sur les logements disponibles dans le fichier json et gestion de l'erreur sur l'id
    const { id } = useParams()

    const [housing, setHousing] = useState({});
    const [error, setError] = useState(false);

    useEffect(() => {
         const fetchHousings = async() => {
            try {
                const response = await fetch('/housings.json');
                const data = await response.json();
                const item = data.find(item => item.id === id);
                if (!item) {
                    throw new Error()
                };
                setHousing(item)
            } catch (err) {
                if (err) setError(true);
            }
        };
            fetchHousings();
    }, []);

    if (error) return (<Error404 />);

    return(
        <div>
            {housing && housing.title ? 
                <div className="housing-container">
                    {/* Importation du composant carrousel */}
                    <Carousel pictures={housing.pictures}/>
                    <div className="housing-info">
                        <h1 className="housing-title">{housing.title}</h1>
                        <h2 className="housing-location">{housing.location}</h2>
                        <div className="host-info">
                            <p className="host-name">{housing.host.name}</p>
                            <img src={housing.host.picture} alt="" className="host-picture"/>
                        </div>
                        <ul className="housing-tags">
                            {housing.tags.map((tag, index) => <li key={index} className="housing-tag">{tag}</li>)}
                        </ul>
                        {/* Importation du composant Rating */}
                        <Rating value={housing.rating}/>
                    </div>
                    {/* Importation du composant collapse */}
                    <div className="housing-details">
                        <Collapse title="Description" description={<p>{housing.description}</p>} />
                        <Collapse title="Équipements" description={<ul>{housing.equipments.map((equipment, index) => <li key={index}>{equipment}</li>)}</ul>} />
                    </div>
                </div>
            : ""}
        </div>
    )
}

export default Housing