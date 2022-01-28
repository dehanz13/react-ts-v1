import { useState, useContext, useReducer, useEffect } from "react"
import { ThemeContext } from '../context/ThemeContext'
import { LightColor } from "./LightColor"

type LightsProps = {
	id: number
	// color: string
}

type LightsAction = {
	type: 'next' | 'red'| 'yellow' | 'green'
	payload: number
	color: string
}

// const initialState = { id: 0 }

// function reducer(state: LightsProps, action: LightsAction) {
// 	switch (action.type) {
// 		// case 'next':
// 		// 	if (state.id === 2) {
// 		// 		return initialState
// 		// 	}
// 		// 	else {
// 		// 		return { id: state.id + action.payload }
// 		// 	}
// 		case 'red':
// 			return { }
// 		case 'yellow':
// 			return {}
// 		case 'green':
// 			return {}
// 		// default:
// 		// 	return state
// 	}
// }

export const Lights = () => {
	const theme = useContext(ThemeContext)
	const [light, setLight] = useState({
		red: theme.lights.red,
		yellow: theme.lights.gray,
		green: theme.lights.gray,
		next: 'yellow'
	});
	
	const handleLightChange = () => {
		switch (light.next) {
			case 'red':
				setLight({
					red: theme.lights.gray,
					yellow: theme.lights.gray,
					green: theme.lights.green,
					next: 'green'
				})
				break
			case 'yellow':
				setLight({
					red: theme.lights.gray,
					yellow: theme.lights.yellow,
					green: theme.lights.gray,
					next: 'red'
				})
				break
			case 'green':
				setLight({
					red: theme.lights.red,
					yellow: theme.lights.gray,
					green: theme.lights.gray,
					next: 'yellow'
				})
				break
		}
	}

	useEffect(() => {
		setInterval(() => {
			handleLightChange()
		}, 2000)
	}, []);
	
	return (
		<div className="light">
			<p>{light.next}</p>
			{/* <LightColor color={light.red} />
			<LightColor color={light.yellow} />
			<LightColor color={light.green} /> */}
		</div>
	)
}