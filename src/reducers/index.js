import {combineReducers} from 'redux';

const songReducers=()=>{
   return[
    {title:'title one',duration:'1.58'},
    {title:'title two',duration:'2.30'},
    {title:'title three',duration:'4.20'},
    {title:'title four',duration:'2.33'}

   ];


};


const selectedSongReducers=(selectedSong=null,action)=>{
  if(action.type==="SONG_SELECTED"){
    return action.payload;
  }
  return selectedSong;

}


export default combineReducers({
  songs:songReducers,
  selectedSong:selectedSongReducers
});  