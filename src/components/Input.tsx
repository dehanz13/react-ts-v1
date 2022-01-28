import React from "react"

// onChange event type
	// handleChange event being passed in as a prop
	// can also define the handler within the component
// destructure props
// destructure types
	// defining types at top works on single component
	// for large component with multiple types, move the types to a separate file and import them.

type InputProps = {
	value: string
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

// basic way
// export const Input = (props: InputProps) => {
// 	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// 		console.log(event)
// 	}
// 	return (
// 		// <input type="text" value={props.value} onChange={props.handleChange} />
// 		<input type="text" value={props.value} onChange={handleInputChange} />
// 	)
// }

// better way = destructure props
export const Input = ({value, handleChange}: InputProps) => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event)
	}
	return (
		<input type="text" value={value} onChange={handleInputChange} />
	)
}