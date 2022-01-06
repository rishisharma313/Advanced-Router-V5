import QuoteForm from '../components/quotes/QuoteForm';
import { useHistory } from 'react-router-dom';
const NewQuote = () => {
    const history = useHistory()
    const addQuoteHandler = quoteData =>{
        console.log(quoteData);
        history.push('/quotes');

    }
    return (
        <section>
            <h1>New Quotes</h1>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </section>
    )
}

export default NewQuote;
