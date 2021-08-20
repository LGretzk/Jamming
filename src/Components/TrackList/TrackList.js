import React from 'react';
import './TrackList.css';
import {Track} from './Track';


export class TrackList extends React.Component {
    render() {
        return (
            <div className="TrackList">
                {this.props.tracks.map((track, i) => 
                    <Track key={'track.id_' + i} track={track} />
                    )
                }
            </div>
        )
    }
}