import  ReactDOM  from "react-dom";

//CSS
import './index.css'

const firstBook = {
 title: 'O Peso do Pássaro Morto',
 author: 'Aline Bei',
 img: 'https://images-na.ssl-images-amazon.com/images/I/71cxQSe2m0L.jpg'
}

const secondBook = {
 title: 'Flores para Algernon',
 author: 'Daniel Keyes',
 img: 'https://images-na.ssl-images-amazon.com/images/I/41tpztfvPML._SX330_BO1,204,203,200_.jpg'
}

const thirdBook = {
 title: 'O incolor Tsukuru Tazaki e seus anos de peregrinação',
 author: 'Haruki Murakami',
 img: 'https://images-na.ssl-images-amazon.com/images/I/41TF1ikiiFL._SX318_BO1,204,203,200_.jpg'
}

const fourthBook = {
 title: 'É assim que acaba',
 author: 'Colleen Hoover',
 img: 'https://images-na.ssl-images-amazon.com/images/I/91r5G8RxqfL.jpg'
}

function BookList() {
  return (
    <div className="container">
      <h1 className="title__booklist">Minha Estante</h1>
      <section className="booklist">
        <Book img={firstBook.img} author={firstBook.author} title={firstBook.title} />
        <Book img={secondBook.img} author={secondBook.author} title={secondBook.title} />
        <Book img={thirdBook.img} author={thirdBook.author} title={thirdBook.title} />
        <Book img={fourthBook.img} author={fourthBook.author} title={fourthBook.title} />
      </section>
    </div>
  )
}

const Book = ({img, title, author}) => {
  return (
    <article className="book">
      <img src={img} alt="book" width={200}/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
