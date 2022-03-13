import { Api } from "../../api/api";
import axios from "axios";
const GET_OPENGROUND = "GET_OPENGROUND";
const GET_TREES = "GET_TREES";
const GET_GREENHOUSE = "GET_GREENHOUSE";
const GET_FLOWERS = "GET_FLOWERS";
const GET_MICROGREENS = "GET_MICROGREENS";
const GET_BUSHES = "GET_BUSHES";
const SET_IMG = "SET_IMG";
const SET_TITLE = "SET_TITLE";
const SET_DESCRIPT = "SET_DESCRIPT";
const SET_IS_UPDATA = "SET_IS_UPDATA";
const SET_UPDATE_DELETE_CARD = "SET_UPDATE_DELETE_CARD ";
let initiallState = {
  openground: null,
  bushes: null,
  trees: null,
  greenhouse: null,
  flowers: null,
  microgreens: null,
  upload: {
    title: null,
    descript: null,
    img: null,
  },
  isUpdateDeleteCard: false,
  isUpdate: false,
};

const contentReducer = (state = initiallState, action) => {
  switch (action.type) {
    case GET_OPENGROUND:
      return {
        ...state,
        openground: action.openground,
      };
    case GET_BUSHES:
      return {
        ...state,
        bushes: action.openground,
      };
    case GET_TREES:
      return {
        ...state,
        trees: action.openground,
      };
    case GET_GREENHOUSE:
      return {
        ...state,
        greenhouse: action.openground,
      };
    case GET_FLOWERS:
      return {
        ...state,
        flowers: action.openground,
      };
    case GET_MICROGREENS:
      return {
        ...state,
        microgreens: action.openground,
      };
    case SET_IMG:
      return {
        ...state,
        upload: { ...state.upload, img: action.img },
      };
    case SET_TITLE:
      return {
        ...state,
        upload: { ...state.upload, title: action.title },
      };
    case SET_DESCRIPT:
      return {
        ...state,
        upload: { ...state.upload, descript: action.descript },
      };
    case SET_IS_UPDATA:
      return {
        ...state,
        isUpdate: action.isUpdate,
      };
    case SET_UPDATE_DELETE_CARD:
      return {
        ...state,
        isUpdateDeleteCard: action.bool,
      };
    default:
      return state;
  }
};

const opengroundActionCriater = (type, openground) => ({type,openground});
export const setImgActionCreator = (img) => ({ type: SET_IMG, img });
export const setTitleActionCreator = (title) => ({ type: SET_TITLE, title });
export const setDescriptActionCreator = (descript) => ({
  type: SET_DESCRIPT,
  descript,
});
export const setIsUpdateActionCreator = (isUpdate) => ({
  type: SET_IS_UPDATA,
  isUpdate,
});
export const setIsUpdateDeleteCard = (bool) => ({
  type: SET_UPDATE_DELETE_CARD,
  bool,
});

export const opengroundThunk = (type,path) => async (dispatch) => {
  const res = await Api.getContent(path);
  dispatch(opengroundActionCriater(type,res));
};

export const uploadThunk = (img, title, descript,path) => async (dispatch) => {
  try {
    const data = new FormData();
    data.append("avatar", img);
    await Api.upload(data).then((res) => {
      axios.post(`/api/auth/${path}`, {
        title,
        descript,
        image: res.data.path,
      });
      dispatch(setIsUpdateActionCreator(false));
    });
  } catch (error) {}
};

export const setIsUpdateThunk = (bool) => dispatch => {
  dispatch(setIsUpdateActionCreator(bool));
  var scrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,

    document.body.offsetHeight,
    document.documentElement.offsetHeight,

    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  window.scrollTo(0, scrollHeight);
}
export const deleteThunk = (path,id) => async (dispatch) => {
  try {
    const res = await Api.delete(path,id);
    dispatch(setIsUpdateActionCreator(false));
    dispatch(setIsUpdateDeleteCard(true));
  } catch (error) {}
};

export default contentReducer;
