// children prop type

type HeadingProps = {
	children: string
}

export const Heading = (props: HeadingProps) => {
	return (
		<div className="">
			<h3>{props.children}</h3>
		</div>
	)
}