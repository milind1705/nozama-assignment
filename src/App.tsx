import React,{ useState } from 'react';
import './App.css';
import BillingInput from './components/BillingInput';
import {Product} from './components/model'
import BillingOutput from './components/BillingOutput';
import BillingForm from './components/BillingForm';
const App: React.FC = ()=> {
  const discountedItems:string[] = ['Book', "Food","Medicle Product"]
  const [items, setItems] = useState<Product[]>([])
  console.log(items)
  return (
    <div className="h-screen w-screen bg-gray-700 text-white font-serif">
      <div className='w-full text-center'>
        <h1 className=' text-7xl decoration-orange-600 text-yellow-600'>NOZAMA</h1>
    </div>
        <div>
          <BillingForm items={items} discountedItems={discountedItems} setItems={setItems} />
        </div>
        <div className='flex justify-around border my-4 mx-4'>
          <BillingInput items={items} setItems={setItems}/>
          <BillingOutput items={items} discountedItems={discountedItems} salesTaxPercent={0.1} importDutyPercent={0.05} />
          </div>
    </div>
  );
}

export default App;
