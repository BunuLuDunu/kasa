import Banner from '../../assets/img/home-banner.png'
import '../Home/home.scss'

function Home() {
    return (
        <main className='home-container'>
           <section className="home-banner">
                <img src={Banner} alt="Vagues s'échouant sur des côtes rocheuses en bord de forêt" />
                <h1>Chez vous, partout et ailleurs</h1>
            </section>

            <section className='housings'>
                <ul>
                    <li></li>
                </ul>
            </section>
        </main>
    )
}

export default Home