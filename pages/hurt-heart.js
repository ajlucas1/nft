
import Bidbutton from "../components/main/Bidbutton";
import Nav from "../components/main/Nav";
import Style from "../styles/Spaceflower.module.scss";


export default function Home() {
  
  return (
    <div className={Style.spaceflower}>
    <Nav />
      <h1>Hurt Heart</h1>
      <div className={Style.bothparts}>
      <div className={Style.photo_con}>
        <img src="nft7.jpg" alt="" />
        </div>
        <div className={Style.description}>
          <h2>Description</h2>
          <p>
          As intermittent derivatives become reconfigured through boundaried and personal practice, the viewer is left with a tribute to the inaccuracies of our culture.
          </p>
          <div className={Style.line}></div>
          <div className={Style.twoicons}>
            <div className={Style.ic}>
              <p>Creator</p>
              <div className={Style.avatar}>
                <img src="avatar5.jpeg" alt="" />
                <p>@walker_</p>
              </div>
            </div>
            <div className={Style.ic}>
              <p>Collection</p>
              <div className={Style.avatar}>
                <img src="avatar3.jpeg" alt="" />
                <p>@colorfulBeauty</p>
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
              <img src="av6.jpeg" alt="" className={Style.avatarpic} />
              <p>
                Bid placed for <span className={Style.white}>8.76 ETH</span> 7
                hours ago by <span className={Style.white}>@goNgo</span>{" "}
              </p>
            </div>
            <div className={Style.bid}>
              <img src="av5.jpeg" alt="" className={Style.avatarpic} />
              <p>
                Bid placed for <span className={Style.white}>9.05 ETH</span> 3
                hours ago by <span className={Style.white}>@spiderboy</span>{" "}
              </p>
            </div>
            <div className={Style.bid}>
              <img src="av3.png" alt="" className={Style.avatarpic} />
              <p>
                Bid placed for <span className={Style.white}>11.46 ETH</span> 1
                hours ago by <span className={Style.white}>@erikkk</span>
              </p>
            </div>
          </div>
          <div className={Style.line}></div>
          <div className={Style.bottomd2}>
            <div className={Style.bottomd1}>
              <h4>Auction ends in</h4>
              <h3>5 Days</h3>
            </div>
            <div className={Style.bottomd1}>
              <h4>Minimum bid</h4>
              <h3>12.42 ETH</h3>
            </div>
          </div>
          <div className={Style.line}></div>
          <Bidbutton />
        </div>
        </div>
    </div>
  );
}
