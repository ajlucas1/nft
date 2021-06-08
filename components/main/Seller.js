import Style from '../../styles/Seller.module.scss'
function Seller({avatar, name, price, number}) {
    return (
        <div className={Style.seller}>
            <p>{number}</p>
           <img src={avatar} alt=""/> 
           <div>
            <h3>{name}</h3>
            <h4>{price}</h4>
           </div>
        </div>
    )
}

export default Seller
