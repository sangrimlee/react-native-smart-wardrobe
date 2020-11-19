import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import {
  changeCategoryEN,
  changeSubCategoryEN,
  changeColorEN,
} from './functions';
const BASE_URL = 'http://3.21.245.113:8000/clothes';

const file_format = (fileUri) => {
  return fileUri.split('.').slice(-1)[0];
};
export const getItemsApi = (userToken) => {
  return axios.post(BASE_URL + '/get', { token: userToken });
};

const uploadImage = (token, date, fileUri) => {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
      token,
      date,
    },
    httpMethod: 'POST',
    uploadType: FileSystem.FileSystemUploadType.MULTIPART,
    fieldName: 'img',
  };
  FileSystem.uploadAsync('http://52.91.48.59:3000/upload', fileUri, options);
};

export const addItemApi = (userToken, itemInfo) => {
  const {
    itemName,
    brand,
    color,
    imageUrl,
    category,
    subCategory,
    description,
  } = itemInfo;
  const token = userToken.slice(0, 20);
  const date = `${Date.now()}`;
  const format = file_format(imageUrl);
  uploadImage(token, date, imageUrl);
  const newImageUrl = `https://smart-wardrobe.s3.ap-northeast-2.amazonaws.com/${token}/${date}.${format}`;
  const data = {
    token: userToken,
    name: itemName,
    brand: brand,
    color: changeColorEN(color),
    url: newImageUrl,
    category: changeCategoryEN(category),
    subcategory: changeSubCategoryEN(subCategory),
    descript: description,
  };

  return axios.post(BASE_URL + '/insert', data);
};

export const modifyItemApi = (userToken, itemInfo) => {
  const {
    id,
    itemName,
    brand,
    color,
    imageUrl,
    category,
    subCategory,
    newCategory,
    newSubCategory,
    description,
  } = itemInfo;
  if (!(imageUrl.slice(0, 4) == 'http')) {
    const token = userToken.slice(0, 20);
    const date = `${Date.now()}`;
    const format = file_format(imageUrl);
    uploadImage(token, date, imageUrl);
    imageUrl = `https://smart-wardrobe.s3.ap-northeast-2.amazonaws.com/${token}/${date}.${format}`;
  }
  const data = {
    token: userToken,
    id: id,
    name: itemName,
    brand: brand,
    color: changeColorEN(color),
    url: imageUrl,
    category: changeCategoryEN(category),
    subcategory: changeSubCategoryEN(subCategory),
    categoryNew: changeCategoryEN(newCategory),
    subcategoryNew: changeSubCategoryEN(newSubCategory),
    descript: description,
  };

  return axios.post(BASE_URL + '/update', data);
};

export const removeItemApi = (userToken, itemInfo) => {
  const { id, category, subCategory } = itemInfo;
  const data = {
    token: userToken,
    id: id,
    category: changeCategoryEN(category),
    subcategory: changeSubCategoryEN(subCategory),
  };
  var config = {
    method: 'delete',
    url: 'http://3.21.245.113:8000/clothes/del',
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  return axios(config);
};

export const likeItemApi = (userToken, itemInfo) => {
  const { id, category, subCategory } = itemInfo;
  const data = {
    token: userToken,
    id: id,
    category: changeCategoryEN(category),
    subcategory: changeSubCategoryEN(subCategory),
  };
  return axios.post(BASE_URL + '/like', data);
};
