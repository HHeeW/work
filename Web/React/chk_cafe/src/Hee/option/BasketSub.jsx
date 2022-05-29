import '../Hee.css';
import { Link } from 'react-router-dom';

const BasketSub = ({menu}) => {
    // console.log(menu);
    let list= [];
    list.push(menu)
    console.log(list)
    return (
        <div className='H_Sub_Basket_Box'>
            <div className='H_Sub_Basket'>
                장바구니
                <p>{list}</p>
                <Link to={'/basket'}><button> 장바구니 버튼</button></Link>
                <button> 바로구매 버튼</button> 
            </div>
        </div>
    )
}

export default BasketSub