import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  //template: "<h3>Greetings</h3><span>Welcome fighter</span>",
  styleUrls: ['./fighter.component.css']
  /*
  styles: [
    'h3 { color: red; }',
    'span { color: green; }'
  ]
  */
})
export class FighterComponent implements OnInit {

  private index:number = 0;
  private radioOption:number = 2;
  private isMatched:boolean=true;
  private isEnabled:boolean=false;
  private fighters = [
    {
      name: "Kasumi",
      img: "KasumiIcon2.png"
    },
    {
      name: "Ryu",
      img: "RyuIcon2.png"
    },
    {
      name: "Hayate",
      img: "HayateIcon2.png"
    },
    {
      name: "Ayane",
      img: "AyaneIcon2.png"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  getAllFighters(){
    return this.fighters;
  }

  getFighterByIndex(index:number){
    return (0<= index && index < this.fighters.length) ? 
      this.fighters[index] : this.fighters[this.fighters.length]  
  }

  getFighterAttribute(){
    switch(this.radioOption){
      case 1: 
        return this.getIndex()+1;
      case 2: 
        return this.getFighterByIndex(this.getIndex()).name;
      case 3: 
        return this.getFighterByIndex(this.getIndex()).img;
      default:
        return this.getFighterByIndex(this.getIndex()).name;
    }
  }

  updateIndex(i:string){
    let num = parseInt(i);
    if(typeof(num)!=='number'){
      //console.log(this.fighters[num]);
      this.index = 0;
      this.isMatched = false;
    }
    else{
      num--;
      if(0 <= num && num < this.fighters.length){
        this.index = num;
        this.isMatched = true;
      } else {
        this.index = 0;
        this.isMatched = false;
      }
    }
  }

  /**
  updateRadioOption(option:number){
    this.radioOption = option;
  }
  */
  updateRadioOption(event:Event){
    this.radioOption = parseInt((<HTMLInputElement>event.target).value);
  }

  setIsMatched(click_action:boolean){
    this.isMatched = click_action;
  }

  getIsMatched(){
    return this.isMatched;
  }

  setIndex(i:number){
    this.index = i;
  }

  getIndex(){
    return this.index;
  }

  invertIsEnabled(){
    this.isEnabled = !this.isEnabled;
  }

  getIsEnabled(){
    return this.isEnabled;
  }
}
