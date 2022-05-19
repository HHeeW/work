import { useState } from 'react';
import * as Click from './OptionClick.js';

const OptionKinds = ({kinds}) => {
    const [count, setCount] = useState(['0','0','0']);
    const [count0, setCount0] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    switch(kinds){
        case 'icecoffee':
        case 'hotcoffee':
            return(
            <>
                <div className="H_Option_Cafe H_Flex_Around">
                    {kinds === 'icecoffee' ? 
                        <div>
                            <h1>얼음</h1>
                            <button id='H_Ice_Size' className='H_active' onClick={()=>Click.IceSize('각얼음')}> 
                                각얼음 
                            </button>
                            <button id='H_Ice_Size' onClick={()=>Click.IceSize('조각얼음')}> 
                                조각얼음 
                            </button>
                            <br />
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
                    <div>
                        <h1>디카페인</h1>
                        <button id='H_Ice_Deca' className='H_active' onClick={()=>Click.Deca('NO')}> 
                            NO
                        </button>
                        <button id='H_Ice_Deca' onClick={()=>Click.Deca('YES')}> 
                            YES 
                        </button>
                    </div>
                </div>
                <div className="H_Option_Cafe H_Flex_Around">
                    <div>
                        <h2>샷추가</h2> 
                        <button onClick={()=>Click.Count(false, count, setCount, 0)}>-</button> 
                        <span>{count[0]}</span> 
                        <button onClick={()=>Click.Count(true, count, setCount, 0)}>+</button>
                    </div>
                    <div>
                        <h2>헤이즐넛시럽</h2> 
                        <button onClick={()=>Click.Count(false, count1, setCount1)}>-</button> 
                        <span>{count1}</span> 
                        <button onClick={()=>Click.Count(true, count1, setCount1)}>+</button>
                    </div>
                    <div>
                        <h2>바닐라시럽</h2> 
                        <button onClick={()=>Click.Count(false, count2, setCount2)}>-</button> 
                        <span>{count2}</span> 
                        <button onClick={()=>Click.Count(true, count2, setCount2)}>+</button>
                    </div>
                </div>
            </>)
        case 'juice':
            return(
            <>
                <div className="H_Option_Cafe">
                주스 선택옵션1
                </div>
                <div className="H_Option_Cafe">
                주스 선택옵션2
                </div>
                <div className="H_Option_Cafe">
                주스 선택옵션3
                </div>
            </>
            )
        case 'smoothie':
            return(
            <>
                <div className="H_Option_Cafe">
                스무디 선택옵션1
                </div>
                <div className="H_Option_Cafe">
                스무디 선택옵션2
                </div>
                <div className="H_Option_Cafe">
                스무디 선택옵션3
                </div>
            </>
            )
        case 'tea':
            return(
            <>
                <div className="H_Option_Cafe">
                차(티) 선택옵션1
                </div>
                <div className="H_Option_Cafe">
                차(티) 선택옵션2
                </div>
                <div className="H_Option_Cafe">
                차(티) 선택옵션3
                </div>
            </>
            )
        default:
            return <></>
    }
}

export default OptionKinds