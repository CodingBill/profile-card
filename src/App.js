//Components
import Attribution from './components/Attribution';
import Card from './components/Card';



function App() {
  const links = {
    yt: "https://www.frontendmentor.io?ref=challenge",
    ft: "https://www.youtube.com/channel/UCQlk9K03J5ThANJ5ZhnuuoQ?view_as=subscriber"
  }

  return (
    <div className="App">
      <Card />
      <Attribution yt={links.yt} ft={links.ft}  />
    </div>
  );
}

export default App;
