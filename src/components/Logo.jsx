import logoImg from "../assets/logo-golfitos.png"

const Logo = () => {
    return (
        <>
        <div className="logo">
            <img src={logoImg} alt="Golfitos Petshop" width={210} height={71} />
        </div>
        </>
    );
}

export default Logo;