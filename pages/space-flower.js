import Bidbutton from "../components/main/Bidbutton";
import Nav from "../components/main/Nav";
import Style from "../styles/Spaceflower.module.scss";

export default function Home() {
  return (
    <div className={Style.spaceflower}>
    <Nav />
      <h1>Space Flower</h1>
      <div className={Style.bothparts}>
      <div className={Style.photo_con}>
        <img src="nft2.jpeg" alt="" />
        </div>
        <div className={Style.description}>
          <h2>Description</h2>
            <p>As intermittent derivatives become reconfigured through boundaried and personal practice, the viewer is left with a tribute to the inaccuracies of our culture.</p>
            <div className={Style.line}></div>
          <div className={Style.twoicons}>

            <div className={Style.ic}>
              <p>Creator</p>
              <div className={Style.avatar}>
                <img src="avatar1.jpeg" alt="" />
                <p>@pie_guy</p>
              </div>
            </div>
            <div className={Style.ic}>
              <p>Collection</p>
              <div className={Style.avatar}>
                <img src="avatar2.jpeg" alt="" />
                <p>@outerSpace</p>
              </div>
            </div>
          </div>
          <ul>
            <li>History</li>
            <li className={Style.bids}>Bids</li>
            <li>Details</li>
          </ul>
          <div className={Style.line}></div>
          <div>
            <div className={Style.bid}>
              <img src="av1.jpeg" alt="" className={Style.avatarpic}/>
              <p>Bid placed for <span className={Style.white}>11.00 ETH</span> 8 hours ago
              by <span className={Style.white}>@mellowguy</span> </p>
            </div>
            <div className={Style.bid}>
              <img src="av2.jpeg" alt="" className={Style.avatarpic}/>
              <p>Bid placed for <span className={Style.white}>11.05 ETH</span>  4 hours ago
              by <span className={Style.white}>@bbbqrwe</span> </p>
            </div>
            <div className={Style.bid}>
              <img src="av3.png" alt="" className={Style.avatarpic}/>
              <p>Bid placed for <span className={Style.white}>12.46 ETH</span> 2 hours ago
              by <span className={Style.white}>@erikkk</span></p>
            </div>
          </div>
          <div className={Style.line}></div>
          <div className={Style.bottomd2}>
            <div className={Style.bottomd1}>
              <h4>Auction ends in</h4>
              <h3>11 Days</h3>
            </div>
            <div className={Style.bottomd1}>
              <h4>Minimum bid</h4>
              <h3>13.00 ETH</h3>
            </div>
          </div>
          <div className={Style.line}></div>
        <Bidbutton />
        </div>
      
      </div>
    </div>
  );
}
