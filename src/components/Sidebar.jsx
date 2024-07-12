import { Button, Col, Container, Form, Image, Nav, Navbar } from "react-bootstrap"
import { useState } from "react"
import logo from '../assets/logo/logo.png'
import { useDispatch } from "react-redux"
import { getSongsAction } from "../redux/actions"


const Sidebar = () => {


    const [searchQuery, setSearchQuery] = useState('')
    /* const [data, setData] = useState(null) */
    const dispatch = useDispatch()


    /* const fillMusicSection = async () => {
        try {
            let response = await fetch(
                'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + searchQuery
            )
            if (response.ok) {
                let data = await response.json()
                setData(data)
            } else {
                throw new Error('Error in fetching songs')
            }
        } catch (err) {
            console.log('error', err)
        }
    } */

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getSongsAction(searchQuery))
        /* fillMusicSection() */
    }



    return (
        <aside>
            <Col xs={2}>
                <Navbar expand="md"
                    className="fixed-left justify-content-between"
                    id="sidebar"
                >
                    <Container className="flex-column align-items-center">
                        <Navbar.Brand>
                            <Image
                                src={logo}
                                alt="Spotify Logo"
                                width="131"
                                height="40"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
                        <Navbar.Collapse id="navbarNavAltMarkup">
                            <Nav className="flex-column">
                                <Nav.Link href="#" className="d-flex align-items-center">
                                    <i className="bi bi-house-door-fill"></i>&nbsp; Home
                                </Nav.Link>
                                <Nav.Link href="#" className="d-flex align-items-center">
                                    {/* <i className="bi bi-book-fill"></i>&nbsp; */} Your Library
                                </Nav.Link>
                                <Nav.Link href="#" className="d-flex align-items-center">
                                    {/* <i className="bi bi-book-fill"></i>&nbsp; */}
                                </Nav.Link>
                                <Form className="mt-3 d-flex  align-items-center" onSubmit={handleSubmit}>

                                    <Form.Group controlId="search">

                                        <Form.Control
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)} />

                                    </Form.Group>

                                    <Button variant="outline-secondary" size="sm" className="h-100 border-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" className="bi bi-search" viewBox="0 0 16 16">
                                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                        </svg>
                                    </Button>
                                </Form>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    <div className="nav-btn mt-3">
                        <Button variant="primary" className="btn signup-btn" type="button">Sign Up</Button>
                        <Button variant="secondary" className="btn login-btn" type="button">Login</Button>
                        <div>
                            <a href="#">Cookie Policy</a> |
                            <a href="#"> Privacy</a>
                        </div>
                    </div>
                </Navbar>
            </Col>
        </aside>




    )
}


export default Sidebar