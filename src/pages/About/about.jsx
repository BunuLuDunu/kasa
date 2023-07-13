import Banner from '../../components/Banner/banner.jsx'
import AboutBanner from '../../assets/img/about-banner.png'
import '../About/about.scss'

function About() {
    const img = {src: AboutBanner, alt: "Rivière passant au milieu d'une valée montagneuses arborée de sapins"}

    return (
        <main className="about-container">
            <Banner img={img} />

            <section className='dropdow-container'>

            </section>
        </main>
    )
}

export default About