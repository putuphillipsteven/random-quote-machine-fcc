import { RandomQuoteCard } from '../components/random-quote-card/container';

export const Home = ({ colour, setColour }) => {
	return (
		<div className={'p-2 flex flex-col gap-y-2 items-center w-full md:w-6/12'}>
			<RandomQuoteCard colour={colour} setColour={setColour} />
		</div>
	);
};
