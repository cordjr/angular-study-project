import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MesssageService } from '../messsage.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor( private messageService: MesssageService) { }

  ngOnInit() {
  }

}
