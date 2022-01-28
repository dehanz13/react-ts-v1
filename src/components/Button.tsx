import React from "react"

// void events, events, id parameter
// onClick event type

type ButtonProps = {
	// handleClick: () => void // if event does nothing
	handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
	return (
		// <button onClick={props.handleClick}>Click me!</button> // without id param
		<button onClick={event => props.handleClick(event, 1)}>Click me!</button>
	)
}