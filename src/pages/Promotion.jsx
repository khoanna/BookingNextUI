import { useParams } from 'react-router-dom'

const Promotion = () => {
  const { id } = useParams();
  return (
    <div>{id}</div>
  )
}

export default Promotion