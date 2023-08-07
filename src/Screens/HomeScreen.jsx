import Banner from "../components/Banner"
import  useFetch  from '../hooks/useFetch';
import Loader from '../components/Loader';
import MovieRow from "../components/MovieRow";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavContainer from "../components/NavContainer";
const HomeScreen = () => {
  const isSearch = useSelector(state => state.globalState.search);
  
  const { data: upcomingMovies, loading, } = useFetch('/movie/upcoming?language=eng');

  const { data: topRatedMovies, loadng: loadingTopRated } = useFetch('movie/top_rated');
  const { data: newReleasedMovies, loading: loadingNew } = useFetch('movie/now_playing ');
  const { data: newSeries, loading: loadingNewSeries } = useFetch('tv/top_rated')
 
  
  
  return (
    <div className="space-y-3 min-h-screen ">
      {/* hero banner */}
      {/* {loading ? <Loader /> : <Banner upcomingMovies={upcomingMovies} />} */}
      {!loading  && <Banner upcomingMovies={upcomingMovies} />}
      {/* hero banner end */}

      {/* nav container */}
      <NavContainer />
      {/* nav container end */}

      <div className={`bg-black ${isSearch? 'opacity-70': 'opacity-100'}  `}>
         {/* mvies || series rows */}
      {
        !loadingNew && <MovieRow title='New Releases' movies={newReleasedMovies}/>
      }
      {
        !loadingNewSeries && <MovieRow title='New Series' movies={newSeries} isSeries={true} />
      }
      {!loadingTopRated && <MovieRow title='Top Rated Movies' movies={topRatedMovies} />}
      {/* mvies || series rows end */}
     </div>
      
    </div>
     
  )
}

export default HomeScreen