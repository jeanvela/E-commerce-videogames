import style from '../../styles/Navbar.module.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = (): JSX.Element => {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen)
    }


    return (
            <header className={style.header}>
                {/* <div>
                    <span>VideoGame</span>
                </div>
                <nav>
                    <span>perfil</span>
                </nav>    */}
                <nav className="bg-white border-gray-200 dark:bg-gray-900">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <div className="flex items-center">
                            <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/gaming-4-239337.png?f=avif&w=256" className="h-8 mr-3" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GameZone</span>
                        </div>
                        <div className="flex items-center md:order-2">
                            <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                                {/* <span className="sr-only">Open user menu</span> */}
                                <img className="w-8 h-8 rounded-full" src="https://bysperfeccionoral.com/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.jpg" alt="user photo" />
                            </button>                      
                            {/* <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                                <div className="px-4 py-3">
                                    <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                                </div>
                                <ul className="py-2" aria-labelledby="user-menu-button">
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                    </li>
                                </ul>
                            </div> */}
                            <button onClick={handleMenuClick} className={style.toggle}>
                                {
                                    isOpen? <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                        </svg> : <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                                        </svg>
                                }
                            </button>
                            {
                                isOpen && <div className={style.container_toggle}>
                                    <ul className={style.ul}>
                                        <li className={style.links}><Link to='/' onClick={handleMenuClick}>Home</Link></li>
                                        <li className={style.links}><Link to='/videogame' onClick={handleMenuClick}>Video games</Link></li>
                                        {/* <li className={style.links}><Link to='/' onClick={handleMenuClick}>Services</Link></li>
                                        <li className={style.links}><Link to='/' onClick={handleMenuClick}>Pricing</Link></li>
                                        <li className={style.links}><Link to='/' onClick={handleMenuClick}>Contact</Link></li> */}
                                    </ul>
                                </div>
                            }
                        </div>
                        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <Link to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" >Home</Link>
                                </li>
                                <li>
                                    <Link to="/videogames" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Video games</Link>
                                </li>
                                <li>
                                    {/* <Link to="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">category</Link> */}
                                </li>
                                {/* <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
                                </li>
                                <li>
                                    <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
    )
}

export default Navbar