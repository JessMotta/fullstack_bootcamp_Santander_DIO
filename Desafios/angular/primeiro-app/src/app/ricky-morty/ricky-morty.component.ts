import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/services/list.service';

@Component({
  selector: 'spa-ricky-morty',
  templateUrl: './ricky-morty.component.html',
  styleUrls: ['./ricky-morty.component.css']
})
export class RickyMortyComponent implements OnInit {

  personagens: Array<any> = []

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList()
  }

  getList(){
    this.listService.getList().subscribe(result =>{
      this.personagens = result?.results
      console.log(this.personagens)
    })
  }

}
