import '../Banner/banner.scss';

function Banner({img, title}) {
    return (
        <section className="banner">
            <img src={img.src} alt={img.alt} />
            {/* Condition pour vérifier si un titre est présent */}
            {title ? (
                <h1>{title}</h1>
            ) : ''}
        </section>
    )
}

export default Banner