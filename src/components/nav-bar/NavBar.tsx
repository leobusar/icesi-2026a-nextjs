const navItems =  [
    {path: '/about', text: 'About'}, 
    {path: '/user', text: 'User'}, 
    {path: '/profile', text: 'Profile'}, 
    {path: '/user/777', text: 'User 777'},     
]

export const NavBar = () => {
    return (
        <nav className="flex bg-blue-500 bg-opacity-80 p-2 m-2 rounded">
            <a href="/" className="flex items-center m-2 text-white">
            <span>Home</span>
            </a>

            <div className="flex flex-1"></div>
            {
                navItems.map(navItem=>(
                    <a key={navItem.path} href={navItem.path} className="flex items-center m-2 text-white">{navItem.text}</a>
                ))
            }
        </nav>
    )
}