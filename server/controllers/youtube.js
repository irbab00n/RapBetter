const axios = require('axios');
const path = require('path');

const filePath = path.join(__dirname, '../../youtube.js');

let key;

try {
  key = require('../apikeys')['youtubeAPI'].key;
} catch(e) {
  key = process.env.YOUTUBE_API;
}

module.exports.fetchVideosByPlaylist = (listId, maxResults) => {

  if (listId === '') {
    throw new Error('List ID supplied to function fetchVideosByPlaylist cannot be an empty string', filePath, 14);
  }

  maxResults = maxResults || 25;

  return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2CcontentDetails&maxResults=${maxResults}&playlistId=${listId}&key=${key}`);

};

module.exports.filterVideosByPublishedDate = (videos, filter = 'newest') => {

  if (videos === undefined) {
    throw new ReferenceError(`filterVideosByPublishedDate requires a 'videos' argument as an array, but wasn't supplied anything`, filePath, 26);
  }

  if (!Array.isArray(videos)) {
    throw new TypeError(`Type of videos supplied to function filterVideosByPublishedDate should be an ARRAY, but received ${(typeof videos).toUpperCase()}`);
  }
  
  let filterFunction;

  switch (filter) {
  case 'oldest':
    filterFunction = (value1, value2) => { return value1 > value2; };
    break;
  default:
    filterFunction = (value1, value2) => { return value1 < value2; };
  }

  for (let i = videos.length - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      let value1 = new Date(videos[j - 1].snippet.publishedAt).getTime();
      let value2 = new Date(videos[j].snippet.publishedAt).getTime();
      if (filterFunction(value1, value2)) {
        let temp = videos[j - 1];
        videos[j - 1] = videos[j];
        videos[j] = temp;
      }
    }
  }

  return videos;

};