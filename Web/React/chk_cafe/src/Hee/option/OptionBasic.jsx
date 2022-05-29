import * as Click from './OptionClick.js';

const OptionBasic  = (props) => {
  return (
    <>
      <div className="H_Option_Cafe  H_Flex_Around">
        <div>
          <h1>사이즈</h1>
          <button id='H_Size' className='H_active' onClick={()=>Click.Size('Grande(473ml, 16oz)')}>
            Grande(473ml, 16oz)
          </button>
          <button id='H_Size' onClick={()=>Click.Size('Venti(591ml, 24oz)')}>
            Venti(591ml, 24oz)
          </button>
          </div>
          <div>
          <h1>컵</h1>
          <button id='H_Cup' onClick={()=>Click.Cup('개인')}> 
            개인컵 
          </button>
          <button id='H_Cup' onClick={()=>Click.Cup('매장용컵')}> 
            매장용컵 
          </button>
          <button id='H_Cup' className='H_active' onClick={()=>Click.Cup('일회용컵')}> 
            일회용컵 
          </button>
        </div>
      </div>
    </>
  )
}

export default OptionBasic 