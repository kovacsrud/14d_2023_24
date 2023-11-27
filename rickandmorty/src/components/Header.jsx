import Rick from '../assets/rick.jpeg';
import Morty from '../assets/morty.png'

function Header() {
  return (
    <div className='bg-gray-800'>
        <div className='grid grid-cols-3 align-items-center'>
            <div className='text-3xl text-white'>
                <h1>Rick és Morty</h1>
            </div>
            <div>
                <img src={Rick} className='rounded-full w-24 p-2'></img>
            </div>    
            <div>
                <img src={Morty} className='rounded-full w-24 p-2'></img>
            </div>

        </div>

    </div>
  )
}

export default Header