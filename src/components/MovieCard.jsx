
const MovieCard = ({ data, isSeries = false }) => {
  return (

    <div className={`text-white ${isSeries ? 'w-[280px]' : 'w-[250px]'} h-[280px]`}>
      <div className="w-full h-[250px]">
        <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}  className="w-full h-full object-cover"/>
      </div>
      {
        isSeries ? (
          <div className="">{data.name}</div>
        ) : (
            <div className="">{data.title}</div>
        ) 
      }
      
    </div>
  )
}

export default MovieCard