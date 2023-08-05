import Banner from '../../components/Banner/banner.jsx'
import AboutBanner from '../../assets/img/about-banner.png'
import '../About/about.scss'
import Collapse from '../../components/Collapse/collapse.jsx'
import { useEffect, useState } from 'react'



function About() {
    /*Importation de l'image pour la bannière de la page "A propos"*/
    const img = {src: AboutBanner, alt: "Rivière passant au milieu d'une valée montagneuses arborée de sapins"}

    // Fetch sur le fichier about.json
    const [about, setAbout] = useState([]);

    useEffect(() => {
        const fetchAbout = async() => {
            const response = await fetch('/about.json');
            const data = await response.json();
            setAbout(data)
            };
            fetchAbout();
    }, [])

    return (
        <main className="about-container">
            {/*Importation du composant bannière*/}
            <Banner img={img} />

            <section className='about-collapse'>
                {/*Importation du composant collapse et ajout des titres et descriptions en props*/}
                {
                    about && about.length>0 && about.map((item) =>
                    <Collapse key={item.id} title={item.title} description={<p>{item.description}</p>}/>)
                }
            </section>
        </main>
    )
}

export default About