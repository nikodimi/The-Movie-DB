import Button from 'react-bootstrap/Button'

const Pagination = ({ page, numberOfPages, hasPreviousPage, onPreviousPage, hasNextPage, onNextPage }) => {
	return (
        
		<div className="pagination d-flex justify-content-center align-items-center mb-3">
            <Button
                disabled={!hasPreviousPage}
                onClick={onPreviousPage}
                className="prev-btn p-3"
            >{'<<'}</Button>

			<div className="current-page p-3"> 
                <p className='mb-0'>{page}/{numberOfPages}</p>
            </div>

            <Button
                disabled={!hasNextPage}
                onClick={onNextPage}
                className="next-btn p-3"
            >{'>>'}</Button>
		</div>
	)
}

export default Pagination