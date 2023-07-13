import Banner from '../../components/Banner/banner.jsx'
import HomeBanner from '../../assets/img/home-banner.png'
import '../Home/home.scss'

function Home() {
    const img = {src: HomeBanner, alt: "Vagues s'échouant sur des côtes rocheuses en bord de forêt"};

    return (
        <main className='home-container'>
            <Banner img={img} title="Chez vous, partout et ailleurs" />

            <section className='housings'>
                <ul>
                    <li></li>
                </ul>
            </section>
        </main>
    )
}

export default Home