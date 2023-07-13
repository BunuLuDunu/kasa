import '../Banner/banner.scss'

function Banner({img, title}) {
    return (
        <section className="banner">
            <img src={img.src} alt={img.alt} />
            {title ? (
                <h1>{title}</h1>
            ) : ''}
        </section>
    )
}

export default Banner