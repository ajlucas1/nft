const { default: LivePart } = require("./Livepart");
import Livepart from "./Livepart";
import Style from "../../styles/Live.module.scss";
import Link from "next/link";
function Live() {
  return (
    <div className={Style.live}>
      <h1>Live NFT's</h1>
      <div className={Style.liveitems}>
        <Link href="/space-flower">
          <a>
            <Livepart
              name="Space Flower"
              username="@pie_guy"
              currentPrice="4.14 ETH"
              image="nft2.jpeg"
              avatar="avatar1.jpeg"
            />
          </a>
        </Link>
        <Link href="/retro-rome">
          <a>
            <Livepart
              name="Retro Rome"
              username="@jon_dill"
              currentPrice="2.80 ETH"
              image="nft3.jpeg"
              avatar="avatar2.jpeg"
            />
          </a>
        </Link>
        <Link href="/asian-color">
          <a>
            <Livepart
              name="Asian Color"
              username="@usa901"
              currentPrice="8.11 ETH"
              image="nft5.jpeg"
              avatar="avatar3.jpeg"
            />
          </a>
        </Link>
        <Link href="/say-what">
          <a>
            {" "}
            <Livepart
              name="Say?What"
              username="@grim_jim"
              currentPrice="2.21 ETH"
              image="nft6.jpeg"
              avatar="avatar4.png"
            />
          </a>
        </Link>
        <Link href="/hurt-heart">
          <a>
            {" "}
            <Livepart
              name="Hurt Heart"
              username="@walker_"
              currentPrice="0.32 ETH"
              image="nft7.jpg"
              avatar="avatar5.jpeg"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Live;
