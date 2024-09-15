import {withRequiredAuthInfo} from "@propelauth/react";
import {Link} from "react-router-dom";

function Home(props) {
   return <div>
        <Link to="/user_info">
            Account Info
        </Link>
   </div>
}

export default withRequiredAuthInfo(Home);