import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const notify = ()=>{
    toast.success('I am success!!')
    toast.warning('I am warning!!')
    toast.info('I am Info!!')
    toast.danger('I am danger!!')
  } 



  return (
    <div className="App">
      <h3>React Toaster Notifications</h3>
      <button onClick={notify}>Click Me!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
