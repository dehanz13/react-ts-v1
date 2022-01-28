// string or any primitives as props
// optional props (messageCount?: number)

type GreetProps = {
	name: string
	messageCount?: number
	isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
	// descruture messageCount from props and assign a default value
	const { messageCount } = props
	return (
		<div className="">
			<h2>
				{props.isLoggedIn
					? `You are logged in!`
					: 'You need to log in first.'}
			</h2>
			{/* <h2>Welcome {props.name}! You have {props.messageCount} unread messages</h2> */}
			<h2>Welcome {props.name}! You have {messageCount} unread messages</h2>
		</div>
	)
}