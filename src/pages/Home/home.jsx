import Banner from '../../components/Banner/banner.jsx';
import HomeBanner from '../../assets/img/home-banner.png';
import '../Home/home.scss';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/card.jsx'

function Home() {
    // Importation de l'image de bannière de la page Home
    const img = {src: HomeBanner, alt: "Vagues s'échouant sur des côtes rocheuses en bord de forêt"};

    // Fetch pour récupérer les datas sur les logements disponibles dans le fichier json
    const [housing, setHousing] = useState([]);

    useEffect(() => {
        const fetchHousings = async() => {
            const response = await fetch('/housings.json');
            const data = await response.json();
            setHousing(data)
            };
            fetchHousings();
    }, [])

    return (
        <main className='home-container'>
            {/* Importation du composant bannière */}
            <Banner img={img} title="Chez vous, partout et ailleurs" />

            <section className='housings'>
                <ul className='housing-cards'>
                    {/* Importation du composant Card dans une liste */}
                    {
                        housing && housing.length>0 && housing.map((housing)=>
                        <li key={housing.id}>
                            <Card {...housing}/>
                        </li>)
                    }
                </ul>
            </section>
        </main>
    )
}

export default Home