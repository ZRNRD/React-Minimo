import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div className={s.header}>
            <NavLink to="/homePage" className={s.logo}>Minimø</NavLink>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/lifestyle" activeClassName={s.activeLink}>Lifestyle</NavLink>
                    <NavLink to="/photodiary" activeClassName={s.activeLink}>Photodiary</NavLink>
                    <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
                    <NavLink to="/travel" activeClassName={s.activeLink}>Travel</NavLink>
                </div>
            </nav>
        </div>
    )
}

export default Header;