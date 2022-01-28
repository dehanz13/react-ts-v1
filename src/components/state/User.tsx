import { useState } from "react"
// optional chaining, null value
type AuthUser = {
	name: string
	email: string
}

export const User = () => {
	const [user, setUser] = useState<AuthUser | null>(null);

	const handleLogin = () => {
		setUser({
			name: "John",
			email: "john@gmail.com",
		})
	}
	const handleLogout = () => {
		setUser(null)
	}
	return (
		<div className="">
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div className="">User is {user?.name}</div>
			<div className="">User is {user?.email}</div>
		</div>
	)
}