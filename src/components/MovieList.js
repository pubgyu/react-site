import PropTypes from 'prop-types';
import { Link } from "react-router-dom"

function MovieList({id,src,title,date,genres,summary}) {
    return (
        <li style={{listStyle:'none'}}>
            <img style={{width:'50%'}} src={src} alt={title}/>
            <h3>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h3>
            <h4>{date}</h4>
            <ul>
                {genres.map((genre,idx)=> <li key={idx}>{genre}</li>)}
            </ul>
            <p>{summary}</p>
        </li>
      )
}

MovieList.propTypes = {
    id : PropTypes.number.isRequired,
    src : PropTypes.string,
    title : PropTypes.string,
    date : PropTypes.string,
    genres : PropTypes.arrayOf(PropTypes.string),
    summary : PropTypes.string
}

export default MovieList;