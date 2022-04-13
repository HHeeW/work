import './singleform.css'

export default function SingleGorm() {
  return (
    <div className='singleform'>
      <form className='writeForm'>
        <div className="wirteFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
          </label>
          <input type='file' id='fileInput' style={{display: 'none'}} />
          <input type="text" placeholder='제목을 입력하세요.' className='writeInput' autoFocu={true} />
        </div>
        <div className="writeFormGroup">
          <textarea ClassName="writeInput writeText" type='text' placeholder='내용을 입력하세요.'></textarea>
        </div>
        <button className='writeSumbit'> 글 올리기 </button>
      </form>
    </div>
  )
}
