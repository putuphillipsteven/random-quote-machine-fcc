import { Link } from 'react-router-dom';
import { getQuote } from '../../../../services/readQuotes';
import { BsTwitterX } from 'react-icons/bs';
import { generateRandomColours } from '../../../../services/randomColours';
export const Footer = ({ quote, setQuote, setLoading, setError, loading, colour, setColour }) => {
	const shareToTwitterLink = `https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text="${quote.quote}" ${quote.author}`;
	console.log(`colour`, colour);
	return (
		<div className='w-full flex justify-between'>
			<Link
				to={shareToTwitterLink}
				target='_blank'
				className='btn-primary flex content-center justify-center'
			>
				<button
					id='tweet-quote'
					onClick={async () => {
						getQuote(setQuote, setLoading, setError);
					}}
				>
					<BsTwitterX />
				</button>
			</Link>
			<button
				id='new-quote'
				className={`btn-primary`}
				onClick={async () => {
					await generateRandomColours(setColour);
					getQuote(setQuote, setLoading, setError);
				}}
				disabled={loading}
			>
				New Quote
			</button>
		</div>
	);
};
