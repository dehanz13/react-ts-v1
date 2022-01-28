// object props --> put in separate file and import them
import { PersonProps } from "./Person.types"
// type PersonProps = {
// 	name: {
// 		first: string
// 		last: string
// 	}
// }

export const Person = (props: PersonProps) => {
	return (
		<div className="">
			<h2>{props.name.first} {props.name.last}</h2>
		</div>
	)
}