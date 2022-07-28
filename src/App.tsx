import React,{ useState } from 'react';
import './App.css';
import BillingInput from './components/BillingInput';
import {Product} from './components/model'
import BillingOutput from './components/BillingOutput';
import BillingForm from './components/BillingForm';
const App: React.FC = ()=> {
  const [items, setItems] = useState<Product[]>([])
  return (
    <div className="h-screen w-screen bg-gray-700 text-white font-serif">
      <div className='w-full text-center'>
        <h1 className=' text-7xl decoration-orange-600 text-yellow-600'>NOZAMA</h1>
    </div>
        <div>
          <BillingForm items={items} setItems={setItems}/>
        </div>
        <div className='flex justify-around border my-4 mx-4'>
          <BillingInput items={items} setItems={setItems}/>
          <BillingOutput items={items} />
          </div>
    </div>
  );
}

export default App;
