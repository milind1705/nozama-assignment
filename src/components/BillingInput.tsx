import React from "react";

import {Props} from './model'



const BillingInput:React.FC<Props> = ({ items }) => {
    return (
      <div className="mt-12">
        <h1 className="text-3xl text-center">Products Input</h1>
        <div className="w-full px flex justify-center">
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((elm) => {
                
                return (
                  <tr key={elm.id}>
                    <td className="border  px-4 py-2">{elm.item}</td>
                    <td className="border px-4 py-2">{elm.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default BillingInput;