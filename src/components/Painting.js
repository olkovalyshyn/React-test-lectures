export default function Painting(props) {
  console.log(props);
  return (
    <div>
      <img src={props.url} alt={props.title} width="480" />
      <h2>{props.title}</h2>
      <p>
        Автор: <a href={props.profileUrl}>{props.authorName}</a>
      </p>
      <p>Цена:{props.price} кредитов</p>
      <p>Доступность: заканчивается или есть в наличии</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}
