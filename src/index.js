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
        <Book 
        img={firstBook.img} 
        author={firstBook.author} 
        title={firstBook.title}
        >
          <p className="description">O Peso do Pássaro Morto é um relato poético e melancólico das mazelas da vida de uma mulher que, desde muito cedo – cedo demais –, teve tudo tirado de si. A inocência, os sonhos, a vontade de viver.</p>
        </Book>

        <Book 
        img={secondBook.img} 
        author={secondBook.author} 
        title={secondBook.title} 
        >
          <p className="description">Flores para Algernon é um livro melancólico e cheio de nuances, que nos faz pensar sobre a falta de humanidade no campo científico, a importância do amadurecimento, a alienação, o preconceito e diversos outros assuntos.</p>
        </Book>

        <Book 
        img={thirdBook.img} 
        author={thirdBook.author} 
        title={thirdBook.title} 
        >
          <p className="description">O incolor Tsukuru Tazaki e seus anos de peregrinação é uma história sobre pessoas perdidas, que lutam para lidar com o desconhecido e aceitá-lo de algum modo. Como cada um de nós.</p>
        </Book>

        <Book 
        img={fourthBook.img} 
        author={fourthBook.author} 
        title={fourthBook.title} 
        >
          <p className="description">É assim que acaba é uma narrativa poderosa sobre a força necessária para fazer as escolhas certas nas situações mais difíceis. Considerada a obra mais pessoal de Hoover, o livro aborda sem medo alguns tabus da sociedade para explorar a complexidade das relações tóxicas, e como o amor e o abuso muitas vezes coexistem em uma confusão de sentimentos.</p>
        </Book>
      </section>
    </div>
  )
}

const Book = ({img, title, author, children}) => {
  return (
    <article className="book">
      <img src={img} alt="book" width={200}/>
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  )
}

ReactDOM.render(<BookList/>, document.getElementById('root'));
