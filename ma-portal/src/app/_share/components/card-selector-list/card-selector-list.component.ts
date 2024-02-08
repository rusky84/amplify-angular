import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';


export interface SelectorListItem{
  Title: String;
  Subtitle: String;
  Content: String;
  ImgSrc: String;
  ImgAlt: String;
  ImgWidth: String;
  RouteLink: any;
  RouteLinkButtonName: String;
}

const DUMMY_DATA: SelectorListItem[] = 
[
  { 
    Title:"Warehouse Action",
    Subtitle: "M3 Warehousing Mobility",
    Content: "",
    ImgSrc: "",
    ImgAlt: "",
    ImgWidth: "",
    RouteLink: "/wa",
    RouteLinkButtonName: "Lets Do It!",
  },
  { 
    Title: "Freight Tool", 
    Subtitle: "M3 Freight Optimization Tool",
    Content: "",
    ImgSrc: "",
    ImgAlt: "",
    ImgWidth: "",
    RouteLink: "",
    RouteLinkButtonName: "Lets Do It!",
  },
  { 
    Title: "Sales Action", 
    Subtitle: "",
    Content: "",
    ImgSrc: "",
    ImgAlt: "",
    ImgWidth: "",
    RouteLink: "",
    RouteLinkButtonName: "Lets Do It",
  }
]

@Component({
  selector: 'app-card-selector-list',
  templateUrl: './card-selector-list.component.html',
  styleUrls: ['./card-selector-list.component.scss']
})
export class CardSelectorListComponent {

  @Input('DataList') selectorList: SelectorListItem[] | undefined;
  
  constructor() {
    this.selectorList = DUMMY_DATA;
  }

}
