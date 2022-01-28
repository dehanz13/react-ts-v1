// children prop of component type

type OscarProps = {
	children: React.ReactNode
}

export const Oscar = (props: OscarProps) => {
	return (
		<div className="">
			{props.children}
		</div>
	)
}