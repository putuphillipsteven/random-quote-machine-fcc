import { useState } from 'react';
import { Home } from './pages/home/container';

function App() {
	const [colour, setColour] = useState('rose-600');

	return (
		<div
			className={
				'p-4 flex flex-col items-center justify-center max-w-screen h-screen font-mono' +
				' bg-' +
				colour
			}
		>
			<Home colour={colour} setColour={setColour} />
		</div>
	);
}

export default App;
