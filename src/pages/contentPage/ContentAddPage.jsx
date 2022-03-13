import React from "react";
import style from "./content.module.css";
function OpenGroundAddPage(props) {
  console.log(props)
  const sendFile =  () => {
    props.uploadThunk(props.upload.img,props.upload.title,props.upload.descript,props.path)
  }

  const onChange = (e) => {
    
    props.setImgActionCreator(e.target.files[0]);
  };
  return (
    <div className={style.new__product_wraper}>
      <div>
        <h1>Добавить</h1>
        <div>
          <input
            type="text"
            placeholder="Название"
            onChange={(e) => props.setTitleActionCreator(e.target.value)}
          />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Описание"
            onChange={(e) => props.setDescriptActionCreator(e.target.value)}
            cols="50"
            rows="20"
          />
        </div>
        <div className={style.file}>
          <span>фото</span>
          <input type="file" onChange={onChange} />
        </div>

        <button onClick={sendFile}>загрузить</button>
      </div>
    </div>
  );
}

export default OpenGroundAddPage;
