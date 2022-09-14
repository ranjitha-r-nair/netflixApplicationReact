import Row from './component/Row';
import requests from './request'
import './App.css'
import Banner from './component/Banner';

function App() {
  return (
    <div className="App">
<Banner/>
      <Row

        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}  //props

      />
      <Row

        title="  Top Rated"
        fetchUrl={requests.fetchTopRated}  //props

      />
      <Row

        title="  Action movies"
        fetchUrl={requests.fetchActionMovies}  //props

      />


      <Row

        title="  comedy movies"

        fetchUrl={requests.fetchComedyMovies}  //props

      />
      <Row

        title="  Horror movies"
        fetchUrl={requests.fetchHorrorMovies}  //props

      />
      <Row

        title=" Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}  //props

      />
      <Row

        title=" Documentaries"

        fetchUrl={requests.fetchDocumentaries}  //props

      />



    </div>
  );
}

export default App;
