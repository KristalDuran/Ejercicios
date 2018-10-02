import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.scss']
})
export class AgentsComponent implements OnInit {

  agents: any = {};

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.getAgents().subscribe(data => this.agents = data);
    this.data.currentData.subscribe(
      data => {
        this.agents = data;
      }
    );
  }
}
