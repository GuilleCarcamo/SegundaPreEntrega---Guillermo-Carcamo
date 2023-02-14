import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {

    return(
      
       <><CartWidget />
       
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Bienvenido a Tienda GuilleC!!</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Remeras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pantalones</a>
              </li>

            </ul>
          </div>
        </div>

        <div className="container-fluid">
          <a className="navbar-brand" href="#">


          </a>
        </div>
      </nav></>
        
       
         
        
    )
}

export default NavBar