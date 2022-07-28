import React,{ useState } from 'react';
import './App.css';
import BillingInput from './components/BillingInput';
import {Product} from './components/model'
import BillingOutput from './components/BillingOutput';
import BillingForm from './components/BillingForm';
const App: React.FC = ()=> {
  const [items, setItems] = useState<Product[]>([])
  console.log(items)
  return (
    <div className="App">
      <div className='w-full text-center mt-8'>
        <h1 className='text-green-700 text-7xl'>NOZAMA</h1>
    </div>
        <div>
          <BillingForm items={items} setItems={setItems}/>
        </div>
        <div className='flex justify-around'>
          <BillingInput items={items} setItems={setItems}/>
          <BillingOutput items={items} />
          </div>
    </div>
  );
}

export default App;
