import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-900 dark:bg-white my-5">
      <div
        className="sm:w-fit xs:w-[90%] sm:px-4  py-2 rounded-sm flex md:flex-no-wrap xs:flex-wrap md:gap-4 xs:gap-1 justify-center dark:bg-gray-200 bg-gray-800 text-white dark:text-black cursor-pointer md:text-lg md:font-semibold xs:text-sm">
        <div
          className="px-4 border-b-2 dark:border-blue-500 border-yellow-600 hover:border-b-2 hover:border-yellow-600 rounded-b-md">
          <Link to={"/"}>Főoldal</Link></div>
        <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to={"/eloadok"}>Előadók</Link></div>
        <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to={"/kategoriak"}>Kategóriák</Link></div>
        <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to={"/ujeloado"}>Új előadó</Link></div>
        <div className="px-4 hover:border-b-2 dark:hover:border-blue-500 hover:border-yellow-600 rounded-b-md"><Link to={"/ujkategoriak"}>Új kategória</Link></div>
      </div>
    </div>
  )
}

export default Menu