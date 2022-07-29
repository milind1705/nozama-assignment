
import {Product} from './model'

interface Props{
  items:Product[],
  discountedItems:string[],
  importDutyPercent:number,
  salesTaxPercent:number
}

const BillingOutput:React.FC<Props> = ({ items, discountedItems, importDutyPercent, salesTaxPercent }) => {
  let total:number = 0;
  let finalTotal:number = 0;
  let salesTax:number = 0;

  return (
    <div className="mt-12 ">
      <h1 className="text-3xl text-center">Products Output</h1>
      <div className="flex justify-center">
      {items.length >0 ?
      <table className="table-auto mb-4">
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
            let importDuty = elm.imported === 'yes'  ? itemPrice * importDutyPercent : 0;
            let tax =
             discountedItems.includes(elm.types)
                ? 0
                : itemPrice * salesTaxPercent;

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
          <tr className='my-4'>
            <td className='border px-4 py-2 text-xl'>
              {" "}
              Total : {finalTotal.toFixed(2)}
             {" "}
            </td>
            <td className='border px-4 py-2text-xl'> Sales Tax : {salesTax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table> : "Product List with added sales tax and Import duty will be display here"}
      </div>
    </div>
  );
};

export default BillingOutput;
