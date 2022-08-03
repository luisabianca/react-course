import  ReactDOM  from "react-dom";

//CSS
import './index.css'

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'O Peso do Pássaro Morto'
  const author = 'Aline Bei'
  return (
    <article className="book">
      <img src="https://images-na.ssl-images-amazon.com/images/I/71cxQSe2m0L.jpg" alt="book" width={200}/>
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
