import {Link} from "react-router-dom";

function Menu() {
    return (
        <div className="navbar bg-sky-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Komponens 1</a></li>
                        <li>
                            <a>További komponensek</a>
                            <ul className="p-2">
                                <li><a>Komponens 3</a></li>
                                <li><a>Komponens 4</a></li>
                            </ul>
                        </li>
                        <li><a>Komponens 2</a></li>
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost normal-case text-xl">Navigáció demó</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={"/komp1"}>Komponens 1</Link></li>
                    <li tabIndex={0}>
                        <details>
                            <summary>További komponensek</summary>
                            <ul className="p-2">
                                <li><Link to={"/komp3"}>Komponens 3</Link></li>
                                <li><Link to={"/komp4"}>Komponens 4</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to={"/komp2"}>Komponens 2</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
               
            </div>
        </div>
    )
}

export default Menu