import { useParams } from "react-router-dom";
import '../Housing/housing.scss';
import { useEffect, useState } from "react";
import Error404 from '../Error/error.jsx';
import Carousel from "../../components/Carousel/carousel.jsx";

function Housing() {
    // Fetch pour récupérer les datas sur les logements disponibles dans le fichier json
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
        <div className="housing-container">
            <Carousel pictures={housing.pictures}/>
            <h1>{housing.title}</h1>
        </div>
    )
}

export default Housing