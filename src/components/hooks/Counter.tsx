import { useEffect, useState } from "react";

export interface CounterProps {
	description: string;
}
export interface Todo {
		userId: number;
		id: number;
		title: string;
		completed: boolean;
}

export function Counter({ description }: CounterProps) {
	const [count, setCount] = useState(0);
	const [todo, setTodo] = useState<Todo>()
	const [errorMessage, setErrorMessage] = useState('');
	const [loading, setLoading] = useState(false);

	// #1. cancel timeout using its id
	// useEffect(() => {
	// 	const id = setTimeout(() => {
	// 		console.log('from cancel timeout', description)
	// 	}, 3000)
	// }, [description])

	// #2. cancel time out using boolean/flag
	// useEffect(() => {
	// 	let currentRender = true;
		
	// 	setTimeout(() => {
	// 		if (currentRender) {
	// 			console.log('from variable', description);
	// 		} else {
	// 			console.log('timeout is done here.');
	// 		}
	// 	}, 3000)
	// 	return () => {
	// 		currentRender = false;
	// 	};
	// }, [description]);
	
	// #3. basic http calls, set response as todo title from jsonplaceholder
	// useEffect(() => {
	// 	async function loadData() {
	// 		const res = await fetch('https://jsonplaceholder.typicode.com/todos/' + description)
	// 		const json = await res.json();
	// 		// console.log("fetching...", json);
	// 		setTodo(json)
	// 	}
	// 	loadData();
	// }, [description]);

	// #4. abort http calls, go to devtools (network tab) and see that we are cancelling the ongoing/pending requests
	useEffect(() => {
		let currentRender = true;

		const controller = new AbortController();
		const signal = controller.signal;

		setLoading(true);
		setErrorMessage('')

		async function loadData() {
			try {
				const res = await fetch(
					// _delay=5000, for each response, we are asking for a delay of 5 seconds on each response to make sure
					// our browser is not caching any request. 
					// we are adding a _bustcache parameter with the current date, so we always have new request, no cache (this is only a demo)
					// in a real application, we would need to have cache
					`https://jsonplaceholder.typicode.com/todos/${description}?_delay=5000&_bustcache=${new Date()}`,
					{
						signal, // this is the signal coming from AbortController.signal
					}
				);

				if (!res.ok && currentRender) {
					// throwing error here because fetch even on 400/500 status code(s) doesn't throw error/exception.
					// in order to go to the catch block, we need to throw the Error ourselves here, otherwise do some if/else logic
					throw new Error(`ERROR: ${res.status} status code.`)
				}

				const json = await res.json();

				if (currentRender) {
					setTodo(json);
					setLoading(false);
					setErrorMessage('');
				}
			} catch (err) {
				if (currentRender) {
					console.log('ERROR: ', err);
					setLoading(false);
					setErrorMessage("Error")
				}
			}
		}

		loadData();

		return () => {
			currentRender = false;
			controller.abort(); // aborting the call here...
		};
	}, [description]);
	
	

	

	return (
		<div className="">
			<h5>Desc: {description}</h5>
			<pre>{JSON.stringify({ loading, error: errorMessage })}</pre>
			<div className="badge bg-secondary fs-1 text-wrap my-4" style={{width: "10rem"}}>
				{todo?.title}
				{todo?.id}
				{todo?.userId}
			</div>
			<div className="col m-4">
				<button type='button' className="btn btn-danger" onClick={() => setCount(count - 1)}>
					-
				</button>
				<span className="mx-5 fs-2">{count}</span>
				<button type='button' className="btn btn-primary" onClick={() => setCount(count + 1)}>
					+
				</button>
			</div>
		</div>
	)
}