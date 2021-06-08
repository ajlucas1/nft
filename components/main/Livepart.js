import Style from '../../styles/Livepart.module.scss'
function LivePart({name, username, currentPrice, image, avatar}) {
    return (
        <div className={Style.livepart}>
            
                <img src={image} className={Style.imageone}/>
                <h2>{name}</h2>
                <div className={Style.avatarsection}>
                    <img src={avatar} className={Style.imagetwo}/>
                    <h3>{username}</h3>
                </div>
                <h4>Current Price</h4>
                <div className={Style.pricesection}>
                <h4>{currentPrice}</h4>
                
                </div>
            
        </div>
    )
}

export default LivePart
