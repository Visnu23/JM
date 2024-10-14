import "./navbar.css"
import {useNavigate} from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const isAdmin = true;
    return (
        <div className="navbar">
            <div className="navContainer">
                <span className="logo">JourneyMate</span>
                <div className="navItems">
                    <button className="navButton" onClick={()=>navigate("/")}>Logout</button>
                    {isAdmin &&<button className="navButton" onClick={()=>navigate("/register")}>Login</button>}
                </div>
            </div>
        </div>
    );
};


export default Navbar
