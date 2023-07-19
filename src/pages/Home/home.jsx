import Banner from '../../components/Banner/banner.jsx';
import HomeBanner from '../../assets/img/home-banner.png';
import '../Home/home.scss';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/card.jsx'

function Home() {
    // Importation de l'image de bannière de la page Home
    const img = {src: HomeBanner, alt: "Vagues s'échouant sur des côtes rocheuses en bord de forêt"};

    // Fetch pour récupérer les datas sur les logements disponibles dans le fichier json
    const [data, setData] = useState([]);
    const getData = () => {
        fetch('/housings.json'
        ,{
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
        )
        .then(function(response){
            console.log(response)
            return response.json();
        })
        .then(function(myJson) {
            console.log(myJson);

            setData(myJson)
        });
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <main className='home-container'>
            <Banner img={img} title="Chez vous, partout et ailleurs" />

            <section className='housings'>
                <ul className='housing-cards'>
                    {
                        data && data.length>0 && data.map((housing)=><li key={housing.id}><Card {...housing} key={housing.id} /></li>)
                    }
                </ul>
            </section>
        </main>
    )
}

export default Home