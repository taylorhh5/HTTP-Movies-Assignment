import React from 'react';
import axios from 'axios';
const MovieCard = props => {
  console.log (props, 'props')
  // const { title, director, metascore, stars } = props.movie;


  // const handleDelete = () => {
    
  //   axios
  //     .delete(`http://localhost:5000/api/movies/${props.movie.id}`)
  //     .then((response) => {
  //       console.log(response)
        
  // //     //   props.history.push('/item-list');
  // //     // })
  // //     // .catch(err => console.log(err.response));
  //     })
  // };


  const handleDelete = (id) => {
    
    axios
      .delete(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
       
        window.location.reload();
       
  //     // })
  //     // .catch(err => console.log(err.response));
      })
  };
  
  return (
    <div className="movie-card">
      <h1>MovieCard.js</h1>
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.movie.metascore}</strong>
      </div>
      <h3>Actors</h3>

      {props.movie.stars.map(star => (
        <div key={props.movie.star} className="movie-star">
          {star}
        </div>
      ))}
       <button onClick={() => handleDelete(props.movie.id)}>Delete Movie</button>
        
      
    </div>
  );
};

export default MovieCard;
