import { Link, useNavigate } from 'react-router-dom';
import { getQuote } from '../../../../services/readQuotes';
import { BsTwitterX } from 'react-icons/bs';
export const Footer = ({ quote, setQuote, setLoading, setError, loading }) => {
	const shareToTwitterLink = `https://twitter.com/intent/post?hashtags=quotes&related=freecodecamp&text=%22When%20one%20door%20of%20happiness%20closes%2C%20another%20opens%2C%20but%20often%20we%20look%20so%20long%20at%20the%20closed%20door%20that%20we%20do%20not%20see%20the%20one%20that%20has%20been%20opened%20for%20us.%22%20Helen%20Keller`;

	return (
		<div className='w-full flex justify-between'>
			<Link to={shareToTwitterLink} target='_blank' className='btn-primary'>
				<button id='new-quote' onClick={() => {}}>
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
