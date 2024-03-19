const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
const XAPIKEY = import.meta.env.VITE_NINJA_API_KEY;
export const getQuote = async (setQuote, setLoading, setError) => {
	setLoading('loading');
	const response = await fetch(url, {
		headers: {
			'X-Api-Key': XAPIKEY,
		},
	});
	const quote = await response.json();
	await setQuote(quote[0]);
	return setLoading(null);
};
