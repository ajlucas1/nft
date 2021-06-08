import Style from '../../styles/Modal.module.scss'

export const Modal = ({showModal, setShowModal}) => {
    return (
        <div>
            {showModal ? (
                <div className={Style.modal}>
                    <div className={Style.modalbox}>
                        <h1>Place a bid</h1>
                        <h3>Your bid</h3>
                        <input type="text" placeholder='$232.86'/>
                        <p>In the event that you have won or been outbid you will recieve an email emidiatly regarding your NFT</p>
                        <button onClick={() =>setShowModal(false)}>SUBMIT BID</button>
                        <button className={Style.x} onClick={() =>setShowModal(false)}>X</button>
                    </div>
                </div>
            ) : null }
        </div>
    ) 
}