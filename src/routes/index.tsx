import { useState } from "react"

import { count_words, reverse_text } from "../wasm-pkg/wasm"

export default function HomePage() {
	const [reversed, setReversed] = useState("")
	const [count, setCount] = useState(0)
	const handleChange = (value: string) => {
		setReversed(reverse_text(value))
		setCount(count_words(value))
	}

	return (
		<div>
			<input className="border" type="text" onChange={(e) => handleChange(e.target.value)} />
			<div>Reversed: {reversed}</div>
			<div>Count: {count}</div>
		</div>
	)
}
