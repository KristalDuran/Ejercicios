import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-seeker',
  templateUrl: './seeker.component.html',
  styleUrls: ['./seeker.component.scss']
})
export class SeekerComponent implements OnInit {

  constructor(private dataService: DataService) { }

  @ViewChild ('input')
  public inputText: ElementRef;
  
  ngOnInit() {
  }
 
  public keyUp(event: any): void {
    const filterValue = this.inputText.nativeElement.value;
    if(filterValue.length >= 3)
      this.dataService.filter(filterValue);
  }
}
