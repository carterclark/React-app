import React, {useState, useEffect} from "react"
import './App.css';
import Axios from 'axios'

function App() {

  var index = 1;

  // const[movie_name, setMovieName] = useState('');
  // const[minute_runtime, setReview] = useState('');
  const[movieList, setMovieList] = useState([]);
  // var movieNameText;
  // var minuteRuntimeText;
  // var airDate;
  // var price;
  // var dateUpdated;
  // var dateCreated;


  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setMovieList(response.data)
    })
  }, [])

  // const submitReview = () => {
  //   Axios.post('http://localhost:3001/api/insert', {
  //     movie_name: movie_name, 
  //     minute_runtime: minute_runtime,
  //   }).then(() => {
  //     alert("successful insert");
  //   })
  // };

  return <div className="App">
    <h1>Database Form</h1>
    <div className="horizontalContainer">

      <div className="verticalContainer">
            <h1 className="label">Movie Name</h1>
            <h1 className="label">Minute Runtime</h1>
            <h1 className="label">Air Date</h1>
            <h1 className="label">Price</h1>
            <h1 className="label">Date Modified</h1>
            <h1 className="label">Date Created</h1>
      </div>

      <div className="verticalContainer">
            <text className="response" id="movie name"/>
            <text className="response" id="minute runtime"/>
            <text className="response" id="air date"/>
            <text className="response" id="price"/>
            <text className="response" id="date modified"/>
            <text className="response" id="date created"/>
      </div>

    </div>
    

    <div className="buttons">
      <button onClick={() => { first()}} >First</button>
      <button onClick={() => { previous()} }>Previous</button>
      <button onClick={() => { next()} }>Next</button>
      <button onClick={() => { last()} }>Last</button>
    </div>
  </div>
  ;

  
  function updateText(){
    var selectedMovie = getById(index);

    document.getElementById("movie name").innerHTML = selectedMovie.movie_name;
    document.getElementById("minute runtime").innerHTML = selectedMovie.minute_runtime;
    document.getElementById("air date").innerHTML = selectedMovie.air_date;
    document.getElementById("price").innerHTML = selectedMovie.price;
    document.getElementById("date modified").innerHTML = selectedMovie.date_modified;
    document.getElementById("date created").innerHTML = selectedMovie.date_created;
  }
  // function updateMovieName(){
  //   document.getElementById("movie name").innerHTML = getById(index).movie_name;
  // }
  // function updateMinuteRuntime(){
  //   document.getElementById("minute runtime").innerHTML = getById(index).minute_runtime;
  // }
  // function updateAirDate(){
  //   document.getElementById("air date").innerHTML = getById(index).air_date;
  // }

  function getById(num){
    var response;
    movieList
      .map((val, listIndex) => {
        if(listIndex === num){
          console.log("index of: " + listIndex + " for val " + val.movie_name)
          response = val;
        }
      })
      return response;
  }

  function first(){
    index = 0;
    console.log("index=" + index);
    updateText()
  }
  function previous(){
    if(index > 0){
      index--;
      console.log("index=" + index);
      updateText()
    }
  }
  function next(){
    if(index < movieList.length - 1) {
      index++;
      console.log("index=" + index);
      updateText()
    }
  }
  function last(){
    index = movieList.length - 1;
    console.log("index=" + index);
    updateText()
  }
}

export default App;
