import React, { useEffect} from "react";
import {connect} from "react-redux"
import ContentPage from "./contentPage/ContentPage";
function TreesPage(props) {
  const isUpdate = props.isUpdate
  const opengroundThunk =props.opengroundThunk
  const isUpdateDeleteCard = props.isUpdateDeleteCard
  const setIsUpdateDeleteCard = props.setIsUpdateDeleteCard
 
  useEffect(() => {
   opengroundThunk("GET_TREES",props.path);
   setIsUpdateDeleteCard(false)
  }, [isUpdate,opengroundThunk,isUpdateDeleteCard]);

  return (
    <>
      {props.data ? (
        <ContentPage
          opengroundThunk={props.opengroundThunk}
          data={props.data}
          {...props}
        />
      ) : (
        <span>pfuheprf</span>
      )}
    </>
  );
}



let mapStateToProps = (state) => {
  return {
    data: state.content.trees,
  };
};
export default connect (mapStateToProps) (TreesPage);
