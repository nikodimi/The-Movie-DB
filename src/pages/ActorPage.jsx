import Container from 'react-bootstrap/Container'
import Loading from '../components/Loading'
import WarningAlert from '../components/alerts/WarningAlert'
import ActorDetails from '../components/ActorDetails'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import { getActor } from '../services/tmdbAPI'

const ActorPage = () => {
    const { id } = useParams()
    const { data:actor, error, isError, isLoading, isSuccess } = useQuery(['actor', { id }], getActor)
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