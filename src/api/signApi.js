import axiosClient from ".";

const signinPath = "/auth/signin";
const signupPath = "/auth/signup";

export const login = async (values) => {
  try {
    const data = await axiosClient.post(signinPath, values);
    localStorage.setItem("key", data.accessToken);
    return "/";
  } catch (error) {
    console.log(error);
    return "/login";
  }
};

export const register = async (values) => {
  try {
    await axiosClient.post(signupPath, values);
    return "/";
  } catch (error) {
    console.log(error);
    return "/register";
  }
};

export const verify = () => {
  const key = localStorage.getItem("key");
  if (!!key) {
    return true;
  }
  return false;
};
