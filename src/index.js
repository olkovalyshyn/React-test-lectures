import ReactDOM from "react-dom";
import App from "./App";

// const elem1 = React.createElement("span", {
//   children: "Якийсь додатковий текст",
// });

// const element = React.createElement("div", {
//   a: 5,
//   b: 10,
//   children: ["Hi all!!!", "222", "333", elem1],
// });

// const elem1 = <span>першеСлово</span>;
// const elem2 = <span>другеСлово</span>;

// const jsxElement = (
//   <div>
//     {elem1}
//     {elem2}
//   </div>
// );
// console.log("!!!jsxElement", jsxElement);
// console.log("!!!element", element);

// ReactDOM.render(element, document.querySelector("#root"));

// const data = {
//   id: "id-1",
//   url:
//     "https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg",
//   title: "Feathers. Art abstract",
//   price: 500,
//   author: {
//     tag: "ractapopulous",
//     url: "https://pixabay.com/users/ractapopulous-24766/",
//   },
//   quantity: 10,
// };

// const painting = (
//   <div>
//     <img src={data.url} alt={data.title} width="480" />
//     <h2>{data.title}</h2>
//     <p>
//       Автор: <a href={data.author.url}>{data.author.tag}</a>
//     </p>
//     <p>Цена: {data.price} кредитов</p>
//     <p>Доступность: заканчивается или есть в наличии</p>
//     <button type="button">Добавить в корзину</button>
//   </div>
// );

// ReactDOM.render(painting, document.querySelector("#root"));

// function Painting(props) {
//   return (
//     <div>
//       <img src={data.url} alt={data.title} width="480" />
//       <h2>{data.title}</h2>
//       <p>
//         Автор: <a href={data.author.url}>{data.author.tag}</a>
//       </p>
//       <p>Цена: {data.price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// const painting = paintings[2];

// function Painting(props) {
//   console.log(props);
//   return (
//     <div>
//       <img src={props.url} alt={props.title} width="480" />
//       <h2>{props.title}</h2>
//       <p>
//         Автор: <a href={props.profileUrl}>{props.authorName}</a>
//       </p>
//       <p>Цена:{props.price} кредитов</p>
//       <p>Доступность: заканчивается или есть в наличии</p>
//       <button type="button">Добавить в корзину</button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Painting
//     url={painting.url}
//     title={painting.title}
//     authorName={painting.author.tag}
//     profileUrl={painting.author.url}
//     price={painting.price}
//   />,
//   document.querySelector("#root")
// );

ReactDOM.render(<App />, document.querySelector("#root"));

//====================================================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
