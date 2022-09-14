import { createRoot } from 'react-dom/client';

//CSS
import './index.css'

const books = [
  {
   id: 1, 
   title: 'O Peso do Pássaro Morto',
   author: 'Aline Bei',
   img: 'https://images-na.ssl-images-amazon.com/images/I/71cxQSe2m0L.jpg'
  },
  {
    id: 2,
   title: 'Flores para Algernon',
   author: 'Daniel Keyes',
   img: 'https://images-na.ssl-images-amazon.com/images/I/41tpztfvPML._SX330_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
   title: 'O incolor Tsukuru Tazaki e seus anos de peregrinação',
   author: 'Haruki Murakami',
   img: 'https://images-na.ssl-images-amazon.com/images/I/41TF1ikiiFL._SX318_BO1,204,203,200_.jpg'
  },
  {
    id: 4,
   title: 'É assim que acaba',
   author: 'Colleen Hoover',
   img: 'https://images-na.ssl-images-amazon.com/images/I/91r5G8RxqfL.jpg'
  }
]


function BookList() {
  return (
    <div className="container">
      <h1 className="title__booklist">Minha Estante</h1>
      <section className="booklist">
        {books.map((book) => {
          return (
            <Book key={book.id} {...book}></Book>
          )
        })}
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

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<BookList/>);
