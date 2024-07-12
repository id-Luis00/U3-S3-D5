import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container, Row } from 'react-bootstrap'
import Sidebar from './components/Sidebar'
import MainContainer from './components/MainContainer'
import Player from './components/Player'

function App() {


  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <MainContainer />
        </Row>
      </Container>
      <Player />
    </>
  )
}

export default App
