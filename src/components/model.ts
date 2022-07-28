export interface Product{
    id:number,
    item:string,
    price:number,
    types:string,
    imported:string
  }

 export interface Props{
    items:Product[],
    setItems: React.Dispatch<React.SetStateAction<Product[]>>
}