import reactlogo from "../assets/Images/reactjs-icon.png"

export function Navbar(){
    return(
        <nav>
            <img src={reactlogo}
             alt="react logo"
             className="react-logo"/>
            <h3 className="nav-heading">ReactFacts</h3>
            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}

