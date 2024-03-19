import { RandomQuoteCard } from '../components/random-quote-card/container';

export const Home = () => {
	return (
		<div className='p-2 flex flex-col gap-y-2 items-center text-rose-600'>
			<RandomQuoteCard />
		</div>
	);
};
