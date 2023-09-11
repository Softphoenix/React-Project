import React from "react";
import  creatRoot  from "react-dom";
import './index.css';

const books = [

  {
    id: 1,
    img:"https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: 'I Love you to the moon and Back',
    author: 'Amelia hepworth',
  },

  {
    id: 2,
    img:"https://m.media-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: 'Our class is a family',
    author: 'Shannon Olsen ',
  },
  
  {
    id: 3,
    img:"https://m.media-amazon.com/images/I/41aTMRnLWWL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett',
  },
  
]

function BookList(){
  return (
   <section className="booklist">
    {books.map((book) => {
      return (
        <Book key={book.id}  {...book}>

        </Book>
      );
    })}
   </section>
  );

}
  
  const Book = ({ img, title, author}) => {
    //attribite , eventHandler
    // onClick, onMouseOver
    const clickHandler = (e) =>{
      console.log(e)
      console.log(e.target)
      alert('Hello word');
    };
    const complexExample = (author) => {
      console.log(author);
    };
  return (
    <article className="book" onMouseOver={() =>{
      console.log(author)
    }}>
       <img src={img} alt="" /> 
         <h1 onClick={() => console.log(title)}>{title}</h1>
         <h4>{author}</h4>
         <button type='button' onClick={clickHandler}>reference example</button>
         <button type='button' onClick={() => complexExample(author)}>more complex example</button>
    </article>
  );
}

creatRoot.render(<BookList/>, document.getElementById('root')
);