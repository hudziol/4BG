import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 1';

  name: string = "Alex";
  age: number = 16;
  isStudent: boolean = true;
  date: string = "2022-10-03 11:59";
  highlight: string = "yellow";
  isError: boolean = false;
  img: string = "https://tuitam.org.pl/wp-content/uploads/2020/02/DSC_8540.jpg";
  emoji: string = "🌚";

  sayHello()
  {
    if(this.age >= 18)
      return "Hello, I am a method";
    else
      return "Oho";
  }

  incrementAge()
  {
    this.age++;
  }

  switchError()
  {
    this.isError = !this.isError;
  }

  switchImg(a: string)
  {
    this.img = a;
  }

  kwadrat(a: boolean)
  {
    if(a)
    {
      this.emoji = "🌝";
    }
    else
    {
      this.emoji = "🌚";
    }
  }
}
