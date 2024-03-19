import { useState } from 'react';
import { Home } from './pages/home/container';

function App() {
	return (
		<div
			className='p-4 flex flex-col items-center justify-center max-w-screen
		 h-screen bg-rose-600 font-mono'
		>
			<Home />
		</div>
	);
}

export default App;
