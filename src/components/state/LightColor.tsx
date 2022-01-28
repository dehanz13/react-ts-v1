type ColorProps = {
	color: any
}

export const LightColor = ({color}: ColorProps) => {
	return (
		<div className="circle" style={color}></div>
	)
}