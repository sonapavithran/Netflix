import React from 'react';
import HomePage from './component/homepage/homepage';
import MovieCard from './component/moviecard/moviecard';
import MovieFolder from './component/moviefolder/moviefolder';
import MoreReasons from './component/morereason/morereason';
import FrequentlyAskedQuestions from './component/frequantly/frequantly';
import Footer from './component/footer/footer';
import MovieCardAPI from './component/moviecardapi/moviecardapi';



function App() {
  return (
    <div className="App">
      <HomePage />
      <MovieCard/>
      <MovieFolder/>
      <MovieCardAPI/>
      <MoreReasons/>
      <FrequentlyAskedQuestions/>
      <Footer/>
    </div>
  );
}

export default App;
