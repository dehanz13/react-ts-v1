import { useState } from "react"
// useState Type Assertion
	// to specify user as empty object instead of null = same thing

type LoggedUser = {
	name: string
	email: string
}

export const LoggedIn = () => {

	const [isLoggedUser, setIsLoggedUser] = useState<LoggedUser>({} as LoggedUser);

	const handleLogin = () => {
		setIsLoggedUser({
			name: 'Jane',
			email: 'jane@gmail.com'
		})
	}
	return (
		<div className="">
			<button onClick={handleLogin}>Login</button>
			<div className="">User is {isLoggedUser.name}</div>
			<div className="">User is {isLoggedUser.email}</div>
		</div>
	)
}