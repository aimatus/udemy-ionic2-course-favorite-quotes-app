import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../models/quote.model';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteGroup: { category: string, quotes: Quote[], icon: string };

  constructor(
    private navParams: NavParams,
    private alertController: AlertController,
    private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorites(selectedQuote: Quote) {
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [this.yesButton(selectedQuote), this.cancelButton]
    });
    alert.present();
  }

  onRemoveFromFavorites(quote: Quote) {
    this.quotesService.removeQuoteFromFavorites(quote);
  }

  yesButton(quote: Quote) {
    return {
      text: 'Yes, go ahead',
      handler: () => {
        this.quotesService.addQuoteToFavorites(quote);
      }
    }
  };

  cancelButton = {
    text: 'No, I changed my mind',
    role: 'cancel',
    handler: () => {
      console.log('Canceled');
    }
  };

  isFavorited(quote: Quote) {
    return this.quotesService.isQuoteFavorited(quote);
  }
}
