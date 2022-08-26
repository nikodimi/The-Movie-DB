import Button from 'react-bootstrap/Button'

const Pagination = ({ page, numberOfPages, hasPreviousPage, onPreviousPage, hasNextPage, onNextPage }) => {
	return (
		<div className="pagination d-flex justify-content-center align-items-center mt-3">
            <Button
                disabled={!hasPreviousPage}
                onClick={onPreviousPage}
                variant="primary"
            >Previous Page</Button>

			<div className="current-page">Page {page}/{numberOfPages}</div>

            <Button
                disabled={!hasNextPage}
                onClick={onNextPage}
                variant="primary"
            >Next Page</Button>
		</div>
	)
}

export default Pagination