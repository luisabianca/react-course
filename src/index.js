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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/71cxQSe2m0L.jpg" alt="book" width={200}/>
  )
}

const Title = () => <h1>O Peso do Pássaro Morto</h1>;
const Author = () => <h4>Aline Bei</h4>;

ReactDOM.render(<BookList/>, document.getElementById('root'));
