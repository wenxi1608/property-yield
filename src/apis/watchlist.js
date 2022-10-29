import axios from "axios";

const apis = {
  addToWatchlist: async (projectName, token) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/api/watchlist/${projectName}`,
      {},
      {
        headers: {
          Authorization: token,
        },
      }
    );
    return response;
  },

  getProjectsWatchedByUser: async (token) => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/api/watchlist/lists`,
      {
        headers: {
          Authorization: token,
        },
      }
    );
    console.log("Apis response", response);
    return response;
  },
};

export default apis;
