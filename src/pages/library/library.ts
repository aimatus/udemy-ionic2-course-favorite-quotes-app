import { Component, OnInit } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { QuotesPage } from '../quotes/quotes';
import quotes from '../../data/quotes';
import { QuotesCollection } from '../../models/quotes-collection.model';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quoteCollection: QuotesCollection[];
  quotesPage = QuotesPage;

  ngOnInit(): void {
    this.quoteCollection = quotes;
  }
}
