import {useState} from 'react'
import { Modal } from './Modal';
function Bidbutton() {
    const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(prev => !prev)
  }
    return (
        <div>
        <button onClick={openModal}>PLACE A BID</button>
        <Modal  showModal={showModal} setShowModal={setShowModal}/>
        </div>
    )
}

export default Bidbutton
