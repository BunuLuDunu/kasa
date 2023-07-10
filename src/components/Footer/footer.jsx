import LogoLight from '../../assets/img/logo-light.png'
import '../Footer/footer.scss'

function Footer() {
    return (
        <footer>
            <div className="footer-wrapper">
                <img src={LogoLight} alt="Logo Kasa blanc"></img>
                <p>© 2020 Kasa. All rights reserved</p>
            </div> 
        </footer>

    )
}

export default Footer