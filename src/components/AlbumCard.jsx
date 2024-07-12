import { Col, Image } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { setCurrentSongAction } from "../redux/actions"



// eslint-disable-next-line react/prop-types
const AlbumCard = ({ data }) => {
    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()

        dispatch(setCurrentSongAction(data))
    }

    return (
        <Col className="text-center song" onClick={handleClick}>
            {/* eslint-disable-next-line react/prop-types */}
            <div>

                <Image className="img-fluid" src={data.album.cover_medium} alt="track" />
            </div>
            <div className="d-flex flex-column align-itmes-center">
                {/* eslint-disable-next-line react/prop-types */}
                <p>{data.title}</p> <p>{data.artist.name}</p>
            </div>
        </Col>
    )
}

export default AlbumCard