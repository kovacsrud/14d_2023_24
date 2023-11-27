import Morty from '../assets/morty.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
    <Link to={"/"} className="text-white z-10 active">
        <img src={Morty} className="w-24 py-8 rounded-full md:py-0 g-image"/>
    </Link>
    <nav className="z-10">
        <ul className="flex flex-row items-center px-6 py-4 text-gray-100 bg-gray-900 rounded-lg">
            <li className="pr-8">
                <Link to="/characters">Karakterek</Link>
            </li>
            <li className="pr-8">
                <Link to="/episodes">Epizódok</Link>
            </li>
            <li className="pr-8">
                <Link to="/locations">Helyszínek</Link>
            </li>
            <li className="text-red-200">
                <Link to="/" className="ml-2">Email</Link>
            </li>
        </ul>
    </nav>
</header>

  )
}

export default Navbar