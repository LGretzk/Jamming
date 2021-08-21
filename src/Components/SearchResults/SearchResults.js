import React from 'react';
import './SearchResults.css';
import { TrackList } from './TrackList';

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>{this.props.searchResults}</h2>
                <TrackList tracks={this.props.searchResults} onAdd={this.props.onAdd} isRemoval="false"/>
            </div>
        )
    }
}