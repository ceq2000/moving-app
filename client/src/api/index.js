import axios from "axios";

import protectedAPI from './protectedAPI';


export default {
  signup: function (newUser) {
    return axios.post("/api/auth/signup", newUser).then(res => res.data);
  },

  login: function (credentials) {
    return axios.post("/api/auth/login", credentials).then(res => res.data);
  },
  ...protectedAPI
};

