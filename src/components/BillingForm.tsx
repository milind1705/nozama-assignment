import React from "react";

import {Product} from './model'

interface Props{
    items:Product[],
    setItems: React.Dispatch<React.SetStateAction<Product[]>>
}

const BillingForm:React.FC<Props> = ({ items, setItems }) => {
    const addItems = (e:React.FormEvent<HTMLFormElement>) => {
        const {item, price, types, imported} = e.target as typeof e.target & {
            item:{value:string}
            price:{value:number}
            types:{value:string}
            imported:{value:string}
        };
      e.preventDefault();
  
      setItems([
        ...items,
        {
            id: Date.now(),
          item: item.value,
          price: price.value,
          types: types.value,
          imported: imported.value,
        },
      ]);
     item.value =''
     price.value = 0
     types.value =''
     imported.value = ''
    };
  
    return (
      <div className="mt-12">
        <h1 className="text-3xl text-center mt-8">Billing Form</h1>
        <div className="ml-60 my-20">
          <form
            className=" max-w-lg flex flex-row gap-4 text-center "
            onSubmit={addItems}
          >
            <div className="gap-4 flex flex-row py-2">
              <label className="py-2 flex flex-row" htmlFor="item">Product:</label>
              <input className="px-4 rounded border-solid border-2 border-indigo-600" required name="item" type="text" />
            </div>
            <div className="gap-4 flex flex-row py-2">
              <label className="py-2" htmlFor="price">Price:</label>
              <input className="px-4 rounded border-solid border-2 border-indigo-600" required name="price" type="number" step="any"/>
            </div>
            <div className="gap-4 flex flex-row py-2">
              <label className="py-2" htmlFor="type">Category:</label>
              <select className="px-4 rounded border-solid border-2 border-indigo-600" name="types" id="" required>
                <option value="none">None</option>
                <option value="food">Food</option>
                <option value="medicle">Medicle Poducts</option>
                <option value="book">Book</option>
              </select>
            </div>
            <div className="gap-4 flex flex-row py-2 ">
              <label className="py-2" htmlFor="type">Imported:</label>
              <select className=" px-4 rounded border-solid border-2 border-indigo-600" name="imported" id="" required>
                <option value="no">No</option>
                <option value="yes">Yes</option>
              </select>
            </div>
  
            <button
              className="bg-indigo-600 hover:bg-blue-900 text-white font-bold  px-8 h-12 text-center rounded"
              >
              ADD
              </button>
          </form>
        </div>
        
      </div>
    );
  };
  
  export default BillingForm;