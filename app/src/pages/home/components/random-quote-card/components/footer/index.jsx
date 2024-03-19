import { getQuote } from '../../../../services/readQuotes';
import { BsTwitterX } from 'react-icons/bs';
export const Footer = ({ setQuote, setLoading, setError, loading }) => {
	return (
		<div className='w-full flex justify-between'>
			<button id='new-quote' className='btn-primary'>
				<BsTwitterX />
			</button>
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
