import React from 'react';
import {connect} from 'react-redux';
const SongDetail=({song})=>{
	if(!song){
		return <div>Select a Song to See Details</div>
	}
	return (
		<div>
			<h3>Details For: </h3>
			<p>
				Title:{song.title}
				<br/>
				Duration: {song.Duration}
			</p>
		</div>

	);
}
const mapStateToProp=(state)=>{
	return {
		song:state.selectedSong
	};
}
export default connect(mapStateToProp)(SongDetail);