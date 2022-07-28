
import {Product} from './model'

interface Props{
  items:Product[],
}

const BillingOutput:React.FC<Props> = ({ items }) => {
  let total:number = 0;
  let finalTotal:number = 0;
  let salesTax:number = 0;

  return (
    <div className="mt-16 ">
      <h1 className="text-3xl text-center">Products Output</h1>
      <div className="flex justify-center">

      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((elm) => {
            let productPrice:number = elm.price;
            total = +total + +productPrice;
            let itemPrice = productPrice;
            let importDuty = elm.imported === 'yes'  ? itemPrice * 0.05 : 0;
            let tax =
              elm.types === "food" ||
              elm.types === "book" ||
              elm.types === "medicle"
                ? 0
                : itemPrice * 0.1;

            finalTotal = +finalTotal + +productPrice + +importDuty + +tax;
            salesTax = finalTotal - total;

            
              const finalPriceOfItem:number = +productPrice + +importDuty + +tax;
            return (
              <tr key={elm.id}>
                <td className="border px-4 py-2">{elm.item}</td>
                <td className="border px-4 py-2">
                  {finalPriceOfItem.toFixed(2)}
                </td>
                
              </tr>
            );
          })}
          <tr>
            <td className='py-4 text-xl'>
              {" "}
              Total : {finalTotal.toFixed(2)}
              {" &"}{" "}
            </td>
            <td className='py-4 text-xl'> Sales Tax : {salesTax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default BillingOutput;
