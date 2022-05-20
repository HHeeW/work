import '../Hee.css';

const BasketSub = ({menu}) => {
    // console.log(menu);
    return (
        <div className='H_Sub_Basket_Box'>
            <div className='H_Sub_Basket'>
                장바구니
                <p>{menu}</p>
                <button> 바로구매 버튼</button> 
            </div>
        </div>
    )
}

export default BasketSub