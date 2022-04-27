import React from 'react'
import styled from 'styled-components'

const CatContainer = styled.div`
    width:100%;
    padding:20px;
    background:#ededed;
    border-bottom:1px solid #ededed;
    position:absolute;
    z-index:1000;
    top:55px;
    left:0;
`
const Wrapper = styled.div`
   width: 1300px;
   max-width: 100%;
   margin-left:auto;
   margin-right:auto;
   display:flex;
   align-items: center;
   justify-content: space-between;
   text-align:center;
`
const Category = (props) => {
    //console.log(props);
    const cat = props.category.map((m)=>(
        <li><a href={'/'+m.alink+'/'} key={m.id} className='main-nav'>{m.title}</a>
            {
                m.subarray && <ul>
                    {
                        m.subarray.map((n) => {
                            return(
                                <li><a href={'/'+n.alink+'/'} key={n.id} className='sub-nav'>{n.title}</a></li>
                            )
                        })
                    }
                </ul>
            }
        </li>
    ));

  return (
      <CatContainer>
          <Wrapper>
             <ul className="category"> 
               {cat}
             </ul> 
          </Wrapper>
      </CatContainer>      
  )
}

export default Category