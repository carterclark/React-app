import React, {useState, useEffect} from "react"
import './App.css';
import Axios from 'axios'

function App() {

  var index = 4;

  const[movie_name, setMovieName] = useState('');
  const[review, setReview] = useState('');
  const[movieReviewList, setMovieList] = useState([])

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((response)=> {
      setMovieList(response.data)
    })
  }, [])

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      movie_name: movie_name, 
      movie_review: review,
    }).then(() => {
      alert("successful insert");
    })
  };

  return <div className="App">
    <h1>CRUD APP v1</h1>

    <div className="form">
      <label>Movie Name:</label>
      <input type="text" name="movieName" onChange={(e) => {
        setMovieName(e.target.value)
      }}/>
      <label>Review:</label>
      <input type="text" name="review" onChange={(e) => {
        setReview(e.target.value)
      }}/>

      <button onClick={submitReview}>Submit</button>
      {movieReviewList.map((val)=> {
        return <h1>
          MovieName: {val.movie_name} | MovieReview: {val.movie_review}
          </h1>
      })}

      <div className="buttonContainer">
        <button onClick={() => { first()}} >First</button>
        <button onClick={() => { previous()} }>Previous</button>
        <button onClick={() => { next()} }>Next</button>
        <button onClick={() => { last()} }>Last</button>
      </div>
    </div>
  </div>
  ;

  function first(){
    index = 0;
    console.log("index=" + index);
  }
  function previous(){
    if(index > 0){
      index--;
      console.log("index=" + index);
    }
  }
  function next(){
    if(index < 10) {
      index++;
      console.log("index=" + index);
    }
  }
  function last(){
    index = 9;
    console.log("index=" + index);
  }
}

export default App;
