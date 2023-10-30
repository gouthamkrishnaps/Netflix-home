import './App.css';
import Banner from './components/Banner';
import MovieRow from './components/MovieRow';
import Nav from './components/Nav';
import requests from './requests';


function App() {
  return (
    <div>
      <Nav />

      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <MovieRow isPresent='true' title='NetflixOriginals' fetchUrl={requests.fetchNetflixOriginals}/>

      <MovieRow title='Trending Movies' fetchUrl={requests.fetchTrending}/>

      <MovieRow title='Top Rated Movies' fetchUrl={requests.fetchTopRated}/>

      <MovieRow title='Action Moviess' fetchUrl={requests.fetchActionMovies}/>

      <MovieRow title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>

      <MovieRow title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
      
      <MovieRow title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>

      <MovieRow title='Documentaries' fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
