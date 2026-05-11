import Link from "next/link"
import ActiveLink from "../active-link/ActiveLink"

const navItems =  [
    {path: '/about', text: 'About'}, 
    {path: '/user', text: 'User'}, 
    {path: '/profile', text: 'Profile'}, 
    {path: '/user/777', text: 'User 777'},     
]

export const NavBar = () => {
    return (
        <nav className="flex bg-blue-500 bg-opacity-80 p-2 m-2 rounded">
            <Link href="/" className="flex items-center m-2 text-white">
            <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>
            {
                navItems.map(navItem=>(
                    <ActiveLink {...navItem} key={navItem.path} />
                ))
            }
        </nav>
    )
}