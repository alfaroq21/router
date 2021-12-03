import { Link } from "react-router-dom"

function Navbar(){

    return(
        <div>
<li> <Link to='/profile'>Profile</Link></li>      
<li><Link to='/'>algérie</Link></li> 
<li><Link to='/two'>LIBYA</Link></li> 

<li><Link to='/one'>TUNISIA</Link></li> 

   </div>
    )
}
export default Navbar