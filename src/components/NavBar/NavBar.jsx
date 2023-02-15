import { Link,NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"


const NavBar = () => {

    return(
      
       
       
       <><nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to='/' className="btn btn-primary">Inicio a tienda GuilleCarcamo!!</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
             
              <li className="nav-item">
                <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/remera'>Remeras</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={({isActive})=> isActive ? 'btn btn-primary' : 'btn btn-outline-primary'} to='/categoria/pantalon'>Pantalones</NavLink>
              </li>

            </ul>
          </div>
        </div>

        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          </a>
        </div>
      </nav> 
      <Link to='/cart'>
      <CartWidget />
      </Link>
      
      </>       
    )
}

export default NavBar