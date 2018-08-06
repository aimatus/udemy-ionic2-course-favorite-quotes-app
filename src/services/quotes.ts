import { Quote } from "../data/quote.interface";

export class QuotesService {

    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }

    removeQuoteFromFavorites(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
            return quoteElement.id == quote.id;
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes(){
        return this.favoriteQuotes.slice();
    }

    isQuoteFavorited(quote: Quote) {
      return this.favoriteQuotes.find((quoteEl: Quote) => {
        return quoteEl.id == quote.id;
      });
    }
}
