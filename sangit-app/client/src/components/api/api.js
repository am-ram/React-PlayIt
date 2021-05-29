import youtubeSearch from "simple-youtube-api";

const API_KEY = "AIzaSyDkbuyIQeV3xcMuuhIMaNFE1Qm3H47o4fs";

export const getPopularList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob
    .searchVideos("tseries+bollywood+songs+latest+only", 10)
    .catch((e) => {
      console.log(e);
      alert(
        "Sorry Admin's Daily Free Youtube Data Quota Is Over. Refresh The Page Or Try Again Later"
      );
    });

  return await data;
};

export const getBollywoodLongSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob
    .searchVideos("hindi bollywood songs 2019", 10)
    .catch((e) => {
      console.log(e);
      alert(
        "Sorry Admin's Daily Free Youtube Data Quota Is Over. Refresh The Page Or Try Again Later"
      );
    });

  return await data;
};

export const getHollywoodSongs = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("hollywood songs latest", 10).catch((e) => {
    console.log(e);
    alert(
      "Sorry Admin's Daily Free Youtube Data Quato Is Over. Refresh The Page Or Try Again Later"
    );
  });

  return await data;
};

export const getGhazalList = async () => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos("popular ghazals", 10).catch((e) => {
    console.log(e);
    alert(
      "Sorry Admin's Daily Free Youtube Data Quato Is Over. Refresh The Page Or Try Again Later"
    );
  });

  return await data;
};

export const getSearchData = async (query) => {
  const ob = new youtubeSearch(API_KEY);

  var data = await ob.searchVideos(query + " song", 12).catch((e) => {
    console.log(e);
    alert(
      "Sorry Admin's Daily Free Youtube Data Quato Is Over. Refresh The Page Or Try Again Later"
    );
  });

  return await data;
};
