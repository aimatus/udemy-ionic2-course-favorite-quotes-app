import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
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

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertController.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [this.yesButton(selectedQuote), this.cancelButton]
    });
    alert.present();
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
}
