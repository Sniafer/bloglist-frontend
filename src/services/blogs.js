import axios from "axios";
const baseUrl = "http://localhost:3003/api/blogs";

//Blogs
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const update = async (updatedObject) => {
  const response = await axios.put(
    `${baseUrl}/${updatedObject.id}`,
    updatedObject
  );
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = axios.delete(`${baseUrl}/${id}`, config);
  return response;
};

//Comments
const getComments = (blogId) => {
  const request = axios.get(`${baseUrl}/${blogId}/comments/`);
  return request.then((response) => response.data);
};

const createComment = async (newObject, blogId) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.post(
    `${baseUrl}/${blogId}/comments`,
    newObject,
    config
  );
  return response.data;
};

const removeComment = async (blogId, commentId) => {
  const config = {
    headers: { Authorization: token },
  };
  const response = await axios.delete(
    `${baseUrl}/${blogId}/comments/${commentId}`,
    config
  );
  return response;
};

const blogsServices = {
  getAll,
  setToken,
  create,
  update,
  remove,
  getComments,
  createComment,
  removeComment,
};

export default blogsServices;
