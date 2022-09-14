import  ReactDOM  from "react-dom";

//CSS
import './index.css'

const books = [
  {
   title: 'O Peso do Pássaro Morto',
   author: 'Aline Bei',
   img: 'https://images-na.ssl-images-amazon.com/images/I/71cxQSe2m0L.jpg'
  },
  {
   title: 'Flores para Algernon',
   author: 'Daniel Keyes',
   img: 'https://images-na.ssl-images-amazon.com/images/I/41tpztfvPML._SX330_BO1,204,203,200_.jpg'
  },
  {
   title: 'O incolor Tsukuru Tazaki e seus anos de peregrinação',
   author: 'Haruki Murakami',
   img: 'https://images-na.ssl-images-amazon.com/images/I/41TF1ikiiFL._SX318_BO1,204,203,200_.jpg'
  },
  {
   title: 'É assim que acaba',
   author: 'Colleen Hoover',
   img: 'https://images-na.ssl-images-amazon.com/images/I/91r5G8RxqfL.jpg'
  }
]

const names = ['Bia', 'Marcelle', 'Bárbara', 'Eduardo'];
const newNames = names.map((name) => {
  return <h1>{name}</h1>
}) 

function BookList() {
  return (
    <div className="container">
      <h1 className="title__booklist">Minha Estante</h1>
      <section className="booklist">
        {newNames}
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
