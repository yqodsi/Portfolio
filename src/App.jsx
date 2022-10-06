import "./App.css";
import { Book } from "./components/book";

import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  gap: 2rem;
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  place-items: center;
`;
const firstBook = {
  img: "https://m.media-amazon.com/images/I/8144Vic9C5L._AC_SY400_.jpg",
  title: "firstBook",
  author: "hamoda",
};
const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81nzxODnaJL._AC_UL320_SR320,320_.jpg",
  title: "secondBook",
  author: "aziz",
};
function App() {
  return (
    <Wrapper className="booklist">
      <Book
        title={secondBook.title}
        img={secondBook.img}
        author={secondBook.author}
      ></Book>
      <Book
        title={firstBook.title}
        img={firstBook.img}
        author={firstBook.author}
      ></Book>
    </Wrapper>
  );
}
export default App;
