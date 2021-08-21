import React from 'react';
import './Track.css';

export class Track extends React.Component {
    constructor(props) {
        super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction(){
        let isRemoval = "";
        isRemoval ? 
        <button className="Track-action" onClick={this.removeTrack}>-</button> : 
        <button className="Track-action" onClick={this.addTrack}>+</button>;
    }

    addTrack(e) {
        const newTrack = e.target.value;
        this.props.onAdd(newTrack);        
    }

    removeTrack(e) {
        const toBeRemoved = e.target.value;
        this.props.onRemove(toBeRemoved);
    }

    render() {
        return (
            <div className="Track">
            <div className="Track-information">
                <h3> {this.props.track.name}</h3>
                <p> {this.props.track.artist} | {this.props.track.album} </p>
            </div>
            <button className="Track-action"> {this.renderAction} </button>
            </div>
        )
    }
}