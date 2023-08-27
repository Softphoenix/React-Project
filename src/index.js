import React from "react";
import  creatRoot  from "react-dom";
import './index.css';

const firstBook = {
  img:"https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: 'I Love you to the moon and Back',
  author: 'Amelia hepworth',
};
const secondBook = {
  img:"https://m.media-amazon.com/images/I/510g8NLbpNL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  title: 'Our class is a family',
  author: 'Shannon Olsen ',
};


function BookList(){
  return (
   <section className="booklist">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}> 
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, dignissimos. Quos dolorum a dolores ut blanditiis labore eum quae ea.
      </p>
    
    </Book>
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />

   </section>
  );

}
  
// const Book = ({ img, title, author, children }) => {
  const Book = (props) => {
  const { img, title, author,} = props;
  console.log(props)
  return (
    <article className="book">
       <img src={img} alt="" /> 
         <h1>{title}</h1>
         <h4>{author}</h4>
         {props.children} 

    </article>
  );
}

creatRoot.render(<BookList/>, document.getElementById('root')
);