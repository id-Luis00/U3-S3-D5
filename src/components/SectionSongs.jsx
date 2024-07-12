import AlbumCard from "./AlbumCard"
import { Col, Row } from "react-bootstrap"
import { useEffect, useState } from "react"




// eslint-disable-next-line react/prop-types
const SectionSongs = ({ title, artist }) => {


    /* const songs = useSelector(state => state.songs.content) */

    /* let songs = []; */

    const [songs, setSongs] = useState([])

    const fillMusicSection = async () => {
        try {
            let response = await fetch(
                `https://striveschool-api.herokuapp.com/api/deezer/search?q=${artist}`
            )
            if (response.ok) {
                let data = await response.json()
                /* songs = data.data */
                setSongs(data.data)
            } else {
                throw new Error('Error in fetching songs')
            }
        } catch (err) {
            console.log('error', err)
        }
    }

    useEffect(() => {
        fillMusicSection()
    }, [songs])



    return (



        <Row>

            <Col xs={10}>
                <div id="rock">
                    <h2>{title}</h2>
                    <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="rockSection">
                        {Array.isArray(songs) && songs.slice(0, 4).map((song, index) => (
                            <AlbumCard key={index} data={song} />
                        ))}
                    </Row>

                </div>
            </Col>
        </Row>



    )
}


export default SectionSongs