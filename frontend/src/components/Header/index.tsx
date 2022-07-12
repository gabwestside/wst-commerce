import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
  return (
    <header>
        <div className="wst-logo-container">
            <img src={logo} alt="WstCommerce" />
            <h1>WstCommerce</h1>
            <p>
              Developed by
              <a href="https://www.instagram.com/gabwestside/"> @gabwestside</a>
            </p>
        </div>
    </header>
  )
}

export default Header
