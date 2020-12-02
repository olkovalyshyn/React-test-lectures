import Painting from "./components/Painting";
import paintings from "./painting.json";

export default function App() {
  return (
    <div>
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        authorName={paintings[0].author.tag}
        profileUrl={paintings[0].author.url}
        price={paintings[0].price}
      />
    </div>
  );
}
