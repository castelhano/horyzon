const navs = {
    root: {
        text: "Root",
        itens: [
            {text:"Menu 1", href:"./pages/foo.html"}
        ]
    }
}

export function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg border-bottom bg-body">
            <div className="container-fluid">
                <span></span>
                <span className="navbar-brand">{props.titulo || 'Horyzon'}</span>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">{props.offCanvasTitulo || 'Menu'}</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Menu</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                        {props.children}
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-1">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Rafa</a>
                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
  }

  export function NavbarItem(props){
    return(
        <h2 onClick={props.onclick}>{props.text}</h2>
    )
  }
  
  export function NavbarDropdown(props){
    return(
        <h2>{props.text}</h2>
    )
  }