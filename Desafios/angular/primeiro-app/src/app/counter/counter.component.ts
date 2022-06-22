import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { PeopleService } from '../shared/services/people.service';

@Component({
  selector: 'spa-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count = 0;

  text: string = '';

  nome = 'Jéssica';

  pessoas = [
    {
      nome: 'Jéssica',
      sobrenome: 'Motta',
    },
    {
      nome: 'Raphael',
      sobrenome: 'Motta',
    },
    {
      nome: 'Araci',
      sobrenome: 'Motta',
    },
    {
      nome: 'David',
      sobrenome: 'Motta',
    },
  ];

 
  constructor(private peopleService: PeopleService) {}

  ngOnInit(): void {
    let interval = setInterval(() => {
      console.log(this.pessoas);
      this.count++;
      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);

  }

  clicou(nome: string): void {
    console.log('Clicou', nome);
  }

  
}
