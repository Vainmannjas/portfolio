import vk_icon from '../../img/icons/vk.svg'
import instagram_icon from '../../img/icons/instagram.svg'
import twitter_icon from '../../img/icons/twitter.svg'
import gitHub_icon from '../../img/icons/gitHub.svg'
import linkedIn_icon from '../../img/icons/linkedIn.svg'

import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">
                    <li className="social__item"><a href="#!"><img src={vk_icon} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={instagram_icon} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={twitter_icon} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={gitHub_icon} alt="Link"/></a></li>
                    <li className="social__item"><a href="#!"><img src={linkedIn_icon} alt="Link"/></a></li>
                </ul>
                <div className="copyright">
                    <p>© 2023 frontend-dev.com</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
