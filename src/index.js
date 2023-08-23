import React from "react";
import  ReactDOM  from "react-dom";

function BookList(){
  return (
   <section>
    <Book />

   </section>
  );

}

const Book = () => {
  return (
    <article>
      <Image/>
      <Tittle/>
      <Author/>
    </article>
  )
}

const Image  = () => (
  <img src="" alt="" />
)

const Tittle = () => <h1>I Love you to the moon and Back</h1>
const Author = () => <h4>Amelia hepworth</h4>

ReactDOM.render(<BookList/>, document.getElementById('root')
);