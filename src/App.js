import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import {connect} from 'react-redux'
import Users from "./pages/Users";
import OpenGroundContainer from "./pages/openGround/OpenGroundPage";
import GreenHousePage from "./pages/GreenHousePage";
import Flowers from "./pages/Flowers";
import MicroGreensPage from "./pages/MicroGreensPage";
import NotFoundPage from "./pages/NotFoundPage";
import TreesPage from "./pages/TreesPage";
import BushesPage from "./pages/BushesPage";
import Layout from "./component/Layout/Layout";
import LoginPage from "./pages/AuthAPage.jsx/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import {
  opengroundThunk,
  setImgActionCreator,
  setTitleActionCreator,
  setDescriptActionCreator,
  setIsUpdateActionCreator,
  uploadThunk,
  deleteThunk,
  setIsUpdateDeleteCard,
  setIsUpdateThunk
} from "./redux/reducers/contentReducer";
function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="users"
            element={
              <RequireAuth>
                <Users />
              </RequireAuth>
            }
          />
          <Route path="bushes" element={<BushesPage path="bushes" {...props} />} />
          <Route path="trees" element={<TreesPage path="trees" {...props} />} />
          <Route path="openground" element={<OpenGroundContainer path="openground" {...props} />}/>
          <Route path="greenhouse" element={<GreenHousePage  path="greenhouse" {...props}/>} />
          <Route path="flowers" element={<Flowers path="flowers" {...props} />} />
          <Route path="microgreens" element={<MicroGreensPage path="microgreens" {...props} />} />
          <Route path="api/auth/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
let mapStateToProps = (state) => {
  return {
    upload: state.content.upload,
    isUpdate: state.content.isUpdate,
    isUpdateDeleteCard: state.content.isUpdateDeleteCard,
  };
};
export default connect(mapStateToProps, {
  opengroundThunk,
  setImgActionCreator,
  setTitleActionCreator,
  setDescriptActionCreator,
  setIsUpdateActionCreator,
  uploadThunk,
  deleteThunk,
  setIsUpdateDeleteCard,
  setIsUpdateThunk
})(App);
