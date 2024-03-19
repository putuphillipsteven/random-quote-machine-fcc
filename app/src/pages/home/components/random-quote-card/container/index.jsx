import { useState } from 'react';
import { Footer } from '../components/footer';
import { Main } from '../components/main';

export const RandomQuoteCard = () => {
	const [quote, setQuote] = useState({});
	const [loading, setLoading] = useState('');
	const [error, setError] = useState('');

	return (
		<div id='quote-box' className='p-4 flex flex-col items-stretch gap-y-2 bg-white min-w-8/12'>
			<Main quote={quote} loading={loading} error={error} />
			<Footer setQuote={setQuote} setLoading={setLoading} setError={setError} loading={loading} />
		</div>
	);
};
