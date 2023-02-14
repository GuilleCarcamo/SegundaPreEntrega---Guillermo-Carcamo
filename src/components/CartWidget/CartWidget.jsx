import cart from './Img/cart.png'
const CartWidget = () => {

    return(
        <>
           <nav className="navbar bg-body-tertiary">
           <div className="container " >
        <a className="navbar-brand" href="#">
          <img src={cart} alt="Cart" width="30" height="24"/>
        </a>
      </div>
    </nav>
        </>
    )

}

export default CartWidget