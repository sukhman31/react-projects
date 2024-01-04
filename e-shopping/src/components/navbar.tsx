import { Link } from 'react-router-dom';

export function Navbar(){
    return (
        <div className=" p-4 flex justify-between shadow-md sticky top-0">
            <div className=" flex">
                <div>
                    <Link to="/" className="p-2">Home</Link>
                </div>
                <div>
                    <Link to="/store" className="p-2">Store</Link>
                </div>
                <div>
                    <Link to="/about" className="p-2">About</Link>
                </div>
            </div>
            <div>
                <button>Cart</button>
            </div>
        </div>
    )
}