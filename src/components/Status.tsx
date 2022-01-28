// use union of string literals to avoid type of 'any' error. (otherwise typescript won't flag any string)

type StatusProps = {
	status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
	let message
	if (props.status === 'loading') message = 'Loading...'
	else if (props.status === 'success') message = 'Data fetched successfully!'
	else if (props.status === 'error') message = 'Error Fetching data'

	return (
		<div>
			<h2>Status - {message}</h2>
		</div>
	)
}