import {Link} from 'react-router-dom'
function Header() {
  return (
    <div className="bg-slate-200">
        <div className="flex justify-between items-center w-[90vw] mx-auto py-4">
            <Link to='/'>
                <h1 className="font-semibold text-lg">Auth App</h1>
            </Link>
            <ul className="flex gap-4 ">
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/signin'>
                    <li>Sign In</li>
                </Link>
                
                
            </ul>
        </div>
    </div>
  )
}

export default Header