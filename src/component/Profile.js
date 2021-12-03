
import { Link } from "react-router-dom"



function Profile(){
    return(
        <div>
            <h1>مرحبا بـك</h1>
            <Link to='/two'>
            <button> اضغط هنـا </button> </Link>
            <img src="https://www.alchourouk.com/sites/default/files/article/maghrebarabe.jpg"/>

        </div>
    )
}
export default Profile