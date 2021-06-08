import Style from '../../styles/Header.module.scss'
import { Link } from 'react-scroll'
import Bottom from './Bottom'

function Header() {
    const scrollToNext = () => window.scrollTo({top:600, behavior:'smooth'})
    const scrollToCreate = () => window.scrollTo({top: 2000, behavior: 'smooth'})
    return (
        <div className={Style.headercontainer}>
        
                <h1>Discover, collect, and sell <br/>
                extraordinary NFTs</h1>
                <h2>
                Buy, sell, and discover exclusive digital assets.</h2>
                <div>
                <button onClick={scrollToNext}>Explore</button>
                    
                    <button onClick={scrollToCreate}>Create</button>
                </div>
             
                
           
        </div>
    )
}

export default Header
