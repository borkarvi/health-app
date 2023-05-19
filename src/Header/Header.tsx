import { Link, NavLink } from 'react-router-dom';
import './Header.scss'
const Header = () => {
    const navArr = [
        {
            path: '',
            name: 'home'
        },
        {
            path: '/show',
            name: 'ALL User'
        }

    ];

    const allLinks = navArr.map((linkobj: any) => {
        return (
            <li>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? 'active-class' : ''
                    }} to={linkobj.path}
                >
                    {linkobj.name}

                </NavLink>
            </li>

        );
    });
    return (
        <div>
            <h1>
                Header
            </h1>

            <ul>
                {allLinks}
            </ul>
        </div>
    )
};

export default Header;