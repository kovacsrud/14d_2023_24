import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Főoldal</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/tanulok'}>Tanulók listája</Link></li>
                    <li><Link to={'/ujtanulo'}>Új tanuló felvétele</Link></li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Navbar;