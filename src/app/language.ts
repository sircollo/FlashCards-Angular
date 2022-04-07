export class Language {
  showDetails:boolean;
  constructor(
    public id?:number,
    public name?:string,
    public details?:any,
    public image?:any 
    ){
    
      this.showDetails = false;

    }
    

}
