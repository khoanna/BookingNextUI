import { useParams } from "react-router-dom"

const Hotel = () => {
    const { id } = useParams();
    return (
        <div>{id}</div>
    )
}

export default Hotel