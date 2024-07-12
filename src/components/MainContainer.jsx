
import { Col, Row } from "react-bootstrap"

import { useSelector } from "react-redux"
import SectionSongs from "./SectionSongs"





const MainContainer = () => {

    const songs = useSelector(state => state.songs.content)


    return (

        <main>
            <Col xs={12} md={9} className="offset-md-3 mainPage">
                <Row>
                    <Col xs={9} lg={11} className=" mainLinks d-none d-md-flex">
                        <a href="#">TRENDING</a>
                        <a href="#">PODCAST</a>
                        <a href="#">MOODS AND GENRES</a>
                        <a href="#">NEW RELEASES</a>
                        <a href="#">DISCOVER</a>
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        {/* <div id="rock">
                            <h2>Rock Classics</h2>
                            <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-5 imgLinks py-3" id="rockSection">
                                {Array.isArray(songs) && songs.slice(0, 5).map((song, index) => (
                                    <AlbumCard key={index} data={song} />
                                ))}
                            </Row>
                        </div> */}
                        <SectionSongs title={'rock'} artist={'Led Zeppelin'} />
                    </Col>
                </Row>
                <Row >
                    <Col xs={10}>
                        <SectionSongs title={'pop'} artist={'Taylor Swift'} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <SectionSongs title={'metal'} artist={'Megadeth'} />
                    </Col>
                </Row>
                <Row>
                    <Col xs={10}>
                        <SectionSongs title={'Ambience / Metal'} artist={'Sleep Token'} />
                    </Col>
                </Row>
            </Col>
        </main>
    )
}





export default MainContainer