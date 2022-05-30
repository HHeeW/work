import '../Hee.css';
import { Link } from 'react-router-dom';

let menu = [];
const BasketSub = (props) => {
    for(let i of props.menu){
        if(i !== undefined){
            console.log(i);
            menu.push(i + " | ");
        }
    }
    menu.push(<br/>)
    console.log(menu)
    return (
        <div className='H_Sub_Basket_Box'>
            <div className='H_Sub_Basket'>
                <div className="H_Sub_basket_Text">
                    <h2>장바구니</h2>
                    <p>{menu}</p>
                    <div className="H_Flex_Around">
                        <Link to={'/basket'}><button> 장바구니 버튼</button></Link>
                        <button> 바로구매 버튼</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketSub