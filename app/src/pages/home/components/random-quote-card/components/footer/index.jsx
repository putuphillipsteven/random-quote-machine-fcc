import { Link } from 'react-router-dom';
import { getQuote } from '../../../../services/readQuotes';
import { BsTwitterX } from 'react-icons/bs';
export const Footer = ({ quote, setQuote, setLoading, setError, loading }) => {
	const shareToTwitterLink = `https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text="${quote.quote}" ${quote.author}`;

	return (
		<div className='w-full flex justify-between'>
			<Link
				to={shareToTwitterLink}
				target='_blank'
				className='btn-primary flex content-center justify-center'
			>
				<button
					id='new-quote'
					onClick={() => {
						getQuote(setQuote, setLoading, setError);
					}}
				>
					<BsTwitterX />
				</button>
			</Link>
			<button
				id='tweet-quote'
				className='btn-primary'
				onClick={() => {
					getQuote(setQuote, setLoading, setError);
				}}
				disabled={loading}
			>
				New Quote
			</button>
		</div>
	);
};
