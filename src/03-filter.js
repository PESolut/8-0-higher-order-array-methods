/*
  Do not change the line below. If you'd like to run code from this file, you may use the `exampleSongData` variable below to gain access to tickets data. This data is pulled from the `data/songs.js` file.

  You may use this data to test your functions. You may assume the shape of the data remains the same but that the values may change.

  Keep in mind that your functions must still have and use a parameter for accepting all songs.
*/
const exampleSongData = require("../data/songs");
// Do not change the line above.

/**
 * Returns an array of all songs by the artist "Saib".
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsBySaib(songs) {
  if (songs.length === 0){
    throw 'error, songs array needs to be more than 0 in length'
  }
  const reqSongs = songs.filter(song => {
    return song.artist === 'Saib'
  })
  return reqSongs
}

/**
 * Returns an array of all songs where the runtime is over three minutes.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getSongsOverThreeMinutes(songs) {
  if (songs.length === 0){
    throw 'error, songs array needs to be more than 0 in length'
  }
  const overThree = songs.filter(song => {
    return song.runtimeInSeconds > 180
  })
  return overThree
}

/**
 * Returns an array of songs where the song title is the same as the song album.
 * @param {Object[]} songs - An array of songs. See the song data for more.
 * @returns {Object[]} An array of objects.
 */
function getTitleTracks(songs) {
  if (songs.length === 0){
    throw 'error, songs array needs to be more than 0'
  }
  const sameTitleAndAlbum = songs.filter(song => {
    return song.title === song.album
  })
  return sameTitleAndAlbum
}

module.exports = {
  getSongsBySaib,
  getSongsOverThreeMinutes,
  getTitleTracks,
};
