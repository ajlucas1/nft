import Style from "../../styles/Bottom.module.scss";
import {BiWalletAlt, BiFolderPlus, BiImageAdd} from 'react-icons/bi'
function Bottom() {
  return (
    <div className={Style.bottom}>
      <h1>Get started creating and selling your NFTs</h1>
      <div className={Style.bottom3}>
        <div className={Style.bottom1}>
          <div className={Style.bottom2}>
            <BiWalletAlt className={Style.wallet}/>
            <h3>Set up your wallet</h3>
          </div>
          <p>
            Once you’ve set up your wallet of choice, connect it to NFT
            marketplace by clicking this link.
          </p>
        </div>
        <div className={Style.bottom1}>
          <div className={Style.bottom2}>
            <BiFolderPlus  className={Style.folder}/>
            <h3>Create your collection</h3>
          </div>
          <p>
          Click Create and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.
          </p>
        </div>
        <div className={Style.bottom1}>
          <div className={Style.bottom2}>
            <BiImageAdd  className={Style.add}/>
            <h3>Add your NFT's</h3>
          </div>
          <p>
          Upload your work, add a title and description, and customize your NFTs with properties, stats, and unlockable content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bottom;
