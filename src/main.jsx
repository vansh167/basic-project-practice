import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Crud from './CRUD/Crud'
import Delete from './CRUD/delete'
// import Try from './Practice/Try'
// import Form from './Practice/form'
// import Togal from './UseState/togal'
// import  Counter from './useReducer/Counter'
// import Timer from './UseState/Timer'
// import Form from './UseState/form'
// import Step1 from './UseState/Step1'
// import Array from './useEffect/Array'

// import Practice from './Practice/Practice'


// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Array/> */}
    {/* <Counter/> */}
    {/* <Crud/> */}
    <Delete/>
{/* <Step1/> */}
   {/* <Form/> */}
      </StrictMode>,
)
