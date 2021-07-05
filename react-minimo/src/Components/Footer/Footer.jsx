import s from "./Footer.module.css"
import { NavLink } from "react-router-dom";
import facebook from "./icons/facebook-f-brands.svg"
import twitter from "./icons/twitter-brands.svg"
import instagram from "./icons/instagram-brands.svg"

const Footer = () => {
    return(
        <div className={s.footer}>
            <div className={s.terms}>
                <NavLink to="/terms-and-conditions" activeClassName={s.activeLink}>Terms and conditions</NavLink>
                <NavLink to="/privacy" activeClassName={s.activeLink}>Privacy</NavLink>
            </div>

            <div className={s.socialMedia}>
                Follow
                <a href="https://www.facebook.com/"><img src={ facebook } alt="facebook" /></a>
                <a href="https://twitter.com/"><img src={ twitter } alt="twitter" /></a>
                <a href="https://www.instagram.com/"><img src={ instagram } alt="instagram" /></a>
            </div>
        </div>
    )
}

export default Footer;