import { Col, Container, Image, Row } from "react-bootstrap"

import shuffle from '../assets/playerbuttons/shuffle.png'
import prev from '../assets/playerbuttons/prev.png'
import play from '../assets/playerbuttons/play.png'
import next from '../assets/playerbuttons/next.png'
import repeat from '../assets/playerbuttons/repeat.png'
import { useSelector } from "react-redux"


const Player = () => {

    const currentSong = useSelector(state => state.songs.currentSong)
    return (

        <Container fluid className="fixed-bottom bg-container pt-1">
            <Row className=" h-100">
                <Col lg={10} className="offset-lg-2">
                    <Row className="h-100 flex-column justify-content-center align-items-center ">


                        <div className="position-absolute start-0 text-light d-flex align-items-center gap-3">
                            {currentSong &&
                                <>
                                    <a href="#" className="text-decoration-none text-light">
                                        <Image src={currentSong.album.cover_medium} className="currentSong" />
                                    </a>
                                    <div>
                                        <a href="#" className="text-decoration-none text-light">
                                            <h5 className="m-0">{currentSong.title}</h5>
                                        </a>
                                        <a href="#" className="text-decoration-none text-light">
                                            <p className="m-0">{currentSong.artist.name}</p>
                                        </a>
                                    </div>
                                </>
                            }
                        </div>


                        <Col xs={6} md={4} className="playerControls">
                            <div className="d-flex">
                                <a href="#">
                                    <Image src={shuffle} />
                                </a>
                                <a href="#">
                                    <Image src={prev} />
                                </a>
                                <a href="#">
                                    <Image src={play} />
                                </a>
                                <a href="#">
                                    <Image src={next} />
                                </a>
                                <a href="#">
                                    <Image src={repeat} />
                                </a>
                            </div>
                            <div className="progress mt-3">
                                <div role="progressbar"></div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default Player