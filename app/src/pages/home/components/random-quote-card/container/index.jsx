import { useState } from 'react';
import { Footer } from '../components/footer';
import { Main } from '../components/main';
import { generateRandomColours } from '../../../services/randomColours';

export const RandomQuoteCard = ({ colour, setColour }) => {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState('');
	const [error, setError] = useState('');

	return (
		<div id='quote-box' className={`p-4 flex flex-col items-stretch gap-y-2 bg-white w-full `}>
			<Main quote={quote} loading={loading} error={error} colour={colour} />
			<Footer
				setQuote={setQuote}
				setLoading={setLoading}
				setError={setError}
				loading={loading}
				quote={quote}
				colour={colour}
				setColour={setColour}
			/>
		</div>
	);
};
