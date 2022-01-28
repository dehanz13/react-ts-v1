// array of objects as props
// import extracted type (name) for reusability 
import { Name } from "./Person.types"

type PersonsListProps = {
	names: Name[]
}

export const PersonList = (props: PersonsListProps) => {
	return (
		<div className="">
			{props.names.map((name) => {
				return (
					<h3 key={name.first}>{name.first} {name.last}</h3>
				)
			})}
		</div>
	)
}