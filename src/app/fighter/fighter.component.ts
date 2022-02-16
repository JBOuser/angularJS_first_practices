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
  private clicked:boolean=true;
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

  updateIndex(i:string){
    let num = parseInt(i);
    if(typeof(num)!=='number'){
      //console.log(this.fighters[num]);
      this.index = 0;
      this.clicked = false;
    }
    else{
      num--;
      if(0 <= num && num < this.fighters.length){
        this.index = num;
        this.clicked = true;
      } else {
        this.index = 0;
        this.clicked = false;
      }
    }
  }

  setClick(click_action:boolean){
    this.clicked = click_action;
  }

  getClick(){
    return this.clicked;
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
