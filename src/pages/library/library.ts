import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';
import quotes from '../../data/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: { category: string, quotes: Quote[], icon: string }[];
  quotesPage = QuotesPage;

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }
}
