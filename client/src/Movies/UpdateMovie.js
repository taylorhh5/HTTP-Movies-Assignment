import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialItem = {
  title: '',
  director: '',
  metascore: '',
  stars: [],
 
};

const UpdateForm = props => {
  const [item, setItem] = useState(initialItem);

  const { match, items } = props;
  useEffect(() => {
    const id = match.params.id;
    const itemToUpdate = items.find(item => `${item.id}` === id);
    if (itemToUpdate) {
      console.log(itemToUpdate);
      setItem(itemToUpdate);
    }
  }, [match, items]);

  const changeHandler = ev => {
    ev.persist();
    let value = ev.target.value;
    if (ev.target.name === 'metascore') {
      value = parseInt(value, 10);
    }

    setItem({
      ...item,
      [ev.target.name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/movies${item.id}`, item)
      .then(res => console.log (res))
    //     props.updateItems(res.data);
    //     props.history.push(`/item-list/${item.id}`);
    //     setItem(initialItem);
    //   })
    //   .catch(err => console.log(err.response));
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          onChange={changeHandler}
          placeholder="title"
          value={item.title}
        />
        <div className="baseline" />

        <input
          type="text"
          name="director"
          onChange={changeHandler}
          placeholder="director"
          value={item.director}
        />
        <div className="baseline" />

        <input
          type="number"
          name="metascore"
          onChange={changeHandler}
          placeholder="metascore"
          value={item.metascore}
        />
        <div className="baseline" />

        <input
          type="string"
          name="stars"
          onChange={changeHandler}
          placeholder="stars"
          value={item.stars}
        />
        <div className="baseline" />

       
        <div className="baseline" />

        <button className="md-button form-button">Update</button>
      </form>
    </div>
  );
};

export default UpdateForm;
