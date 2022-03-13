import React from "react";
import ContentCard from "./ContentCard";
import ContentAddPage from "./ContentAddPage";
import style from "./content.module.css";


function ContentPage(props) {
  const arrOpenground = props.data.data.map((e) => {
    return (
      <ContentCard
        path={props.path}
        deleteThunk={props.deleteThunk}
        key={e._id}
        id={e._id}
        title={e.title}
        descript={e.descript}
        image={e.image}
      />
    );
  });

  return (
    <div>
      <div className={style.wraper}>
        {arrOpenground}
        <div className={style.button__openground_main_page}>
          <button
            onClick={()=>{props.setIsUpdateThunk(true)}}
          >
            +
          </button>
        </div>
      </div>
      {props.isUpdate ? (
        <ContentAddPage
          {...props}
          setIsClick={props.setIsUpdateActionCreator}
          opengroundThunk={props.opengroundThunk}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ContentPage;
