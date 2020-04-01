import axios from "axios";

const getApi = userAndProject => `https://api.github.com/repos/${userAndProject}/issues`;

export const fetchData = async (callback, userAndProject) => {
  const api = getApi(userAndProject);
  try {
    const { data } = await axios.get(api);
    callback(data);
  } catch (error) {
    console.error(error);
  }
};
