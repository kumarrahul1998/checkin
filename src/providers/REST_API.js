import axios from "axios";
axios.defaults.headers.common["Authorization"] = `Token 1f069eed0fd30ba9912af2ddf7063e50c68ec78dabda0f480dd3356418d721ef`
axios.defaults.baseURL = "https://dev.api.check-in.in"
const make_API_call = (req_method, path, data = {}) => {
  switch (req_method) {
    case "get":
      return axios
        .get(path)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });

    case "post":
      return axios
        .post(path, data)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });

    case "put":
      return axios
        .put(path, data)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });

    case "delete":
      return axios
        .delete(path)
        .then((res) => res.data)
        .catch((err) => {
          console.log(err.response);
          throw err.response.data;
        });
  }
};

export default make_API_call;