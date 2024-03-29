export const Main = ({ quote, loading, error, colour }) => {
	const loadingText = loading ? ` text-gray-200` : ` text-${colour}`;
	return (
		<div className='w-full flex flex-col items-center '>
			<h1 id='text' className={'min-w-6/12 text-center font-bold text-xl ' + loadingText}>
				{quote.quote ? quote.quote : 'Click New Quote Button'}
			</h1>
			{quote.author && (
				<h2 id='author' className={`text-md self-end ${loadingText}`}>
					-{quote.author}
				</h2>
			)}
		</div>
	);
};
