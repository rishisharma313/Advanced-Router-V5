import QuoteList from '../components/quotes/QuoteList';

const Dummy_Quotes = [
    {id:'q1', author:'Rishi', text:'Learning is fun'},
    {id:'q2', author:'Rishi 2', text:'Learning is fun'}
]
const AllQuotes = () => {
    return <QuoteList quotes={Dummy_Quotes}/>
}

export default AllQuotes;
