import Banner from "../components/Banner"
import  useFetch  from '../hooks/useFetch';
import Loader from '../components/Loader';
import MovieRow from "../components/MovieRow";
import { useEffect } from "react";
import { fetchMovies } from "../features/movies/movieSlice";
import { useDispatch, useSelector } from "react-redux";
const HomeScreen = () => {
  const dispatch = useDispatch();
  
  const { data: upcomingMovies, loading, } = useFetch('/movie/upcoming?language=en-US');

  const { data: topRatedMovies, loadng: loadingTopRated } = useFetch('movie/top_rated');
  const { data: newReleasedMovies, loading: loadingNew } = useFetch('movie/now_playing ');
  const { data: newSeries, loading: loadingNewSeries } = useFetch('tv/top_rated')
 
  // const { movies: topra, loading, error } = useSelector((state) => state.movies);
  // console.log(movies, 'h');
  // useEffect(() => {
  //   dispatch(fetchMovies('movie/upcoming'));
  // }, [dispatch])
  
  return (
    <div className="space-y-3">
      {loading ? <Loader /> : <Banner upcomingMovies={upcomingMovies} />}
      {
        loadingNew ? <Loader/> : <MovieRow title='New Releases' movies={newReleasedMovies}/>
      }
      {
        loadingNewSeries ? <Loader /> : <MovieRow title='New Series' movies={newSeries} isSeries={true} />
      }
      {loadingTopRated ? <Loader /> : <MovieRow title='Top Rated Movies' movies={topRatedMovies} />}
      
    </div>
     
  )
}

export default HomeScreen