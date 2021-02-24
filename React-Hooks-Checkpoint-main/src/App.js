import './App.css';
import React, {useState} from 'react';
import MovieList from './Component/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import { v4 as uuidv4} from 'uuid';
import {Route, BrowserRouter } from 'react-router-dom';
import MovieDescription from "./Component/MovieDescription";
// import Notfound from "./Component/Notfound";
// import Routes from "./routes";
// import Filter from './Component/Filter';

const App = () => {
  const [movies,setMovies] = useState([
    { 
      id : uuidv4(),
      title:'Peaky blinders',
      genre:'Serie britannique : crime, drama',
      posteUrl:'https://fr.web.img5.acsta.net/c_310_420/pictures/210/457/21045721_20131001172258551.jpg',
      rate: 1,
      trailerURL : "https://www.youtube.com/embed/oVzVdvGIC7U",
      description: 'Peaky Blinders is an English television crime drama set in 1920s Birmingham, England in the aftermath of World War I. The series, which was created by Steven Knight and produced by Caryn Mandabach Productions, Screen Yorkshire and Tiger Aspect Productions, follows the exploits of the Shelby crime family. Screen Yorkshire provided funding for the production through the Yorkshire Content Fund. It was the first production to receive funding from the Yorkshire Content Fund, which in turn made certain the majority of the show was filmed in Yorkshire as part of the deal.'
    },
    { 
      id : uuidv4(),
      title:'Narcos',
      genre:'Serie américaine : crime, policière, biographie' ,  
      posteUrl:'https://fr.web.img6.acsta.net/pictures/15/07/29/14/33/086520.jpg',
      rate: 3,
      trailerURL : "https://www.youtube.com/embed/xl8zdCY-abw",
      description: 'Narcos est inspirée de faits réels qui ont trait à la lutte de la DEA et des autorités colombiennes contre Pablo Escobar.'
    },
    { 
      id : uuidv4(),
      title:'Breaking Bad',
      genre:'Serie américaine : Drame, Thriller,Comédie',  
      posteUrl:'https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg',
      rate: 2,
      trailerURL : "https://www.youtube.com/embed/HhesaQXLuRY",
      description: 'Set in Albuquerque, New Mexico, between 2008 and 2010, Breaking Bad follows Walter White, a meek high school chemistry teacher who transforms into a ruthless player in the local methamphetamine drug trade, driven by a desire to financially provide for his family after being diagnosed with terminal lung cancer.'
    },
    { 
      id : uuidv4(),
      title:'Prison Break',
      genre:'Serie américaine :crime, dramatique, policière' ,  
      posteUrl:'https://fr.web.img5.acsta.net/pictures/17/05/22/16/49/588696.jpg',
      rate: 5,
      trailerURL : "https://www.youtube.com/embed/AL9zLctDJaU",
      description: 'The series revolves around two brothers, Lincoln Burrows (Dominic Purcell) and Michael Scofield (Wentworth Miller); Burrows has been sentenced to death for a crime he did not commit, and Scofield devises an elaborate plan to help his brother escape prison and clear his name.'
    },
    ]);
     
    const [filterRate, setFilterRate] = useState(1);

    const [searchValue, setSearchValue] = useState("");

    const search = (inputValue) =>{
      setSearchValue(inputValue);
    }

    const addNewMovie =(movie) =>{
      setMovies(movies.concat(movie));
    }
 
  return (
    <div className="App">
    <BrowserRouter>
      <Route path="/" render={() => <Navbar filterRate ={filterRate} setFilterRate={setFilterRate} search={search}/>} />
      <Route  path="/" exact render={() => <MovieList movies ={movies.filter((movie)=>movie.rate >=filterRate && movie.title.toLowerCase().includes(searchValue.toLowerCase().trim()))}
      addNewMovie={addNewMovie} />} />
      <Route exact path="/moviedescription/:id" render= {(props)=> <MovieDescription movies={movies} {...props}/>}   />
      <Route  path="/" component={Footer} />
      {/* <Route restricted={false} component={Notfound}/> */}
      </BrowserRouter>  
  </div>
  );
}
export default App ;