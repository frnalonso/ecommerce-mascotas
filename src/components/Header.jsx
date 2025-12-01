import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
    return (
        <>
        <div className="container-fluid header py-3">  
            <div className="container">
                <div className="allign-items-center">
                    <div className="col-md-4">
                        <Logo />
                    </div>
                <div className="col-md-4">
                 
                </div>
                </div>
            </div>
        </div>
        <NavBar />
        
       
        </>
    );
}

export default Header;