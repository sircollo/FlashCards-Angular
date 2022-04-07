export class Language {
  showDetails:boolean;
  constructor(
    public id:number,
    public name:string,
    public details:any ){
    
      this.showDetails = false;

    }
}
