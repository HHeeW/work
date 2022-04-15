import './singleform.css'

export default function SingleForm() {
  return (
    <div className="sform">
         <img src="images/h4.jpg" alt="h4" className="bannerImg" />
         <h1 className="postTitle">Posting</h1>
         <form className="writeForm">
              <div className="writeFormGroup">
                   <label htmlFor="fileInput">
                       <i className="writeIcon fas fa-plus"></i>
                   </label>
                   <input type="file" id="fileInput" style={{display:"none"}} />
                   <input type="text" placeholder="제목을 입력하세요." className="writeInput" 
                    autoFocus={true} />
              </div>
              <div className="writeFormGroup">      
                   <textarea 
                      className="writeInput writeText" 
                      type="text" 
                      placeholder="내용을 입력하세요."
                   ></textarea>
              </div>
              <div className="btnbox">
                  <button className="writeSubmit"> 글 올리기 </button>
              </div> 
         </form>
    </div>
  )
}