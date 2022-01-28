// pass the style as prop instead of hardcoded within the component

type ContainerProps = {
	styles: React.CSSProperties
	children: React.ReactNode
}

export const Container = (props: ContainerProps) => {
	return (
		<div style={props.styles}>
			{props.children}
		</div>
	)
}