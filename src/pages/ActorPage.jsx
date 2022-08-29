import Container from 'react-bootstrap/Container'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import ActorDetails from '../components/ActorDetails'
import { useParams } from 'react-router-dom'
import useActor from '../hooks/useActor'

const ActorPage = () => {
    const { id } = useParams()
    const { data:actor, error, isError, isLoading, isSuccess } = useActor(id)
    console.log(actor)

    return (
        <Container className="py-3">

            {isLoading &&  <Loading />}

            {isError && <WarningAlert message={error.message} />}

            {isSuccess && (
                  
                <ActorDetails actor={actor}/>

            )}

    </Container>
    )
}

export default ActorPage