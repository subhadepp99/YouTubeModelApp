import _ from 'lodash';
import React ,{Component}from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './index.css';
import YTSearch from 'youtube-api-search';
import VideoList from './component/video-list';
import SearchBar from './component/search-bar';
import VideoDetail from './component/video-detail';

// const API_KEY='AIzaSyBHxclwkR3uHfmJ0yWAUwtitrckKMOI5bw';
const API_KEY = 'AIzaSyDxZlREqARdcNYST9QOKSzjNosWJt8cmcA';
 
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            videos:[],
            selectedVideo:null
        };
this.videoSearch ('simpsons');
    }

//for searching in the searchbar

videoSearch(term){
    YTSearch({key:API_KEY,term:term},(videos) => {
        this.setState({
            videos:videos,
            selectedVideo:videos[0]
        });
                });
}





//create some component that shouldd produce some html

render()  {

const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);



    return (
    <div>
        {/* <SearchBar onSearchTermChange={term => this.videoSearch(term)}/> */}
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos}/>
        </div>
        );
}
}

//take this component's html and put in the page(in the DOM)
//ReactDOM.render(<App />,document.querySelector('.container'));



ReactDOM.render(<App />, document.getElementById('root'));


