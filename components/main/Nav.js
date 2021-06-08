import Style from '../../styles/Nav.module.scss'
import { AiOutlineHome } from 'react-icons/ai';
import Link from "next/link";
function Nav() {
    return (
        <div className={Style.navcontainer}>
       
          
            <ul>
            <Link href='/'><AiOutlineHome/>
            </Link>   
            </ul>
           
           
        </div>
    )
}

export default Nav
