import { category } from "./category";

export class recipe {

		public RecipeCode:string ;
		public RecipeName:string ;
		public PrepartionTime:number ;
		public Level:number ;
		public AddDate:Date ;
		public StringList:Array<string> ;
		public Prepartion:Array<string> ;
        public UserCode:string ;
        public MyVar:number ;
		public Picture:string ;
		 public IsShow:boolean ;
		public CategoryCode:string;
         constructor( 
            RecipeCode:string, RecipeName:string,	 PrepartionTime:number,
			Level:number,
		 AddDate:Date ,
		CategoryCode:string,
         UserCode:string ,
         MyVar:number ,
		 Picture:string,
          IsShow:boolean ){
          }
        }