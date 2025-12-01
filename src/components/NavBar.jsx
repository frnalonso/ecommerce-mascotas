import Categorias from "./Categorias";



const NavBar = () => {
    return (
        <>
        <div className="container-fluid navbar py-3" >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <Categorias />
                    </div>
                    
                    <div className="col-md-4 d-flex align-items-center justify-content-end">
                        <i className="bi bi-cart text-danger"></i>
                    </div>

                
                        
                </div>
            </div>

        </div>
        </>
    );
}

export default NavBar;