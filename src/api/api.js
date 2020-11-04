import * as axios from "axios";


let instance = axios.create({
  withCredentials: true,
  headers: {
    "API-KEY": "fc23b599-bb02-4575-90dd-86aa339862df",
  },
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
});

export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },

  follow(usersId) {
    return instance.post(`follow/${usersId}`, {});
  },
  unfollow(usersId) {
    return instance.delete(`follow/${usersId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};
export const ProfileAPI = {
  getProfile(userId) {
    return ProfileAPI.getProfile(userId);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId)
  },
  updateStatus(status) {
    return instance.put(`profile/status`, {status:status})
  },
  savePhoto(photoFile) {
    const formData = new FormData();
    formData.append("image", photoFile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
        saveProfile(profile) {
    return instance.put(`profile`, profile)
  }

};
export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false, captcha = null) {
    return instance.post(`auth/login`, {email, password, rememberMe, captcha});
  },
  logout() {
    return instance.delete(`auth/login`);
  },
 };
export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`/security/get-captcha-url`);
  },
 };
