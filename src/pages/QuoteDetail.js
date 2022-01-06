import { useParams, Route } from "react-router-dom";

import  Comments  from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const Dummy_Quotes = [
    {id:'q1', author:'Rishi', text:'Learning is fun'},
    {id:'q2', author:'Rishi 2', text:'Learning is fun'}
]

const QuoteDetail = () => {
    const params = useParams();
    const quote = Dummy_Quotes.find(quote=> quote.id === params.quoteId)
    
    return (
        <section>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path="/quotes/:quoteId/comments">
                <Comments />
            </Route>
        </section>
    )
}

export default QuoteDetail;
