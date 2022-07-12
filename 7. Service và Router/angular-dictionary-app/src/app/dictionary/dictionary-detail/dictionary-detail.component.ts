import { Component, OnInit } from '@angular/core';
import {Word} from "../../model/word";
import {DictionaryService} from "../../service/dictionary.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  word: Word | any;
  constructor(private dictionaryService: DictionaryService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const english = paramMap.get('word');
      this.word = this.dictionaryService.getWord(english);
    });
  }

  ngOnInit(): void {
  }

}
