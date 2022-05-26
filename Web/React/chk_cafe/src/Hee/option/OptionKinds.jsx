
import * as Click from './OptionClick.js';

const OptionKinds = (props) => {
    
    switch(props.kinds){
        case 'coffeeList':
        case 'TeaList':
        case 'noncoffee':
        case 'fruit':
            return(
            <>
                <div className="H_Option_Cafe H_Flex_Around">
                    {props.kinds === 'ice' ? props.kinds !== 'fruit' ?
                        <div>
                            <h1>얼음</h1>
                            <button id='H_Ice_Size' className='H_active' onClick={()=>Click.IceSize('각얼음')}>
                                각얼음 
                            </button>
                            <button id='H_Ice_Size' onClick={()=>Click.IceSize('조각얼음')}> 
                                조각얼음 
                            </button>
                            <br /> 
                            :
                            <button id='H_Ice' onClick={()=>Click.Ice('적게')}> 
                                적게 
                            </button>
                            <button id='H_Ice' className='H_active' onClick={()=>Click.Ice('보통')}> 
                                보통 
                            </button>
                            <button id='H_Ice' onClick={()=>Click.Ice('많이')}> 
                                많이 
                            </button>
                        </div>: <></>
                    }
                </div>
            </>)
        default:
            return <></>
    }
}

export default OptionKinds