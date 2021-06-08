import Style from '../../styles/Topseller.module.scss'
import Seller from './Seller'

function Topsellers() {
    return (
        <div className={Style.topseller}>
        <h1>Top Selling Artists</h1>
            <div className={Style.sellerbox}>
            <Seller name='@pie_guy' avatar='avatar1.jpeg' price='205.8 ETH' number='1'/>
            <Seller name='@jon_dil' avatar='avatar2.jpeg' price='201.2 ETH' number='2'/>
            <Seller name='@usa901' avatar='avatar3.jpeg' price='180.7 ETH' number='3'/>
            <Seller name='@grim_jim' avatar='avatar4.png' price='165.2 ETH' number='4'/>
            <Seller name='@walker_' avatar='avatar5.jpeg' price='122.9 ETH' number='5'/>
            <Seller name='@jimboy' avatar='avatar6.jpeg' price='102.3 ETH' number='6'/>
            <Seller name='@night_star' avatar='avatar7.jpeg' price='80.1 ETH' number='7'/>
            <Seller name='@teddyted' avatar='avatar8.jpeg' price='60.7 ETH' number='8'/>
            <Seller name='@venny' avatar='avatar10.jpeg' price='47.8 ETH' number='9'/>
            </div>
        </div>
    )
}

export default Topsellers
