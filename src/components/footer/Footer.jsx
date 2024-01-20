import vk from '../../img/icons/vk.svg';
import tg from '../../img/icons/tg.svg';
import gh from '../../img/icons/gitHub.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item">
                            <a href="https://t.me/Ra1n_XD" target="_blank">
                                <img src={tg} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://github.com/Ra1n-xD/y-practicum" target="_blank">
                                <img src={gh} alt="Link" />
                            </a>
                        </li>
                        <li className="social__item">
                            <a href="https://vk.com/ra1n_xd" target="_blank">
                                <img src={vk} alt="Link" />
                            </a>
                        </li>
                    </ul>
                    <div className="copyright">
                        <p>© {new Date().getFullYear()} Chervonenko Eduard</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
