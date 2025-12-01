const MensajeError = ({ mensaje }) => {

    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger fw-bold" role="alert">{mensaje}</div>

                    </div>

                </div>
            </div>

        </>
    )


}

export default MensajeError;