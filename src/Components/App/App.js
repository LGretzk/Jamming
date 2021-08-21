import React from 'react';
import { SearchResults } from '../SearchResults/SearchResults';
import {Playlist} from '../Playlist/Playlist';
import {SearchBar} from '../SearchBar';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [];
    this.state.playlistName = "";
    this.state.playlistTracks = [
      {name: "", 
      artist: "",
      album: "",
      id: ""}];
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => 
      savedTrack.id === track.id)) {
        return;
      }
    this.setState(
      { playlistTracks: this.state.playlistTracks.push(track)}
    );
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onAdd={this.addTrack}/>
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
