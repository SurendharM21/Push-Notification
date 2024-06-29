import logo from './logo.svg';
import './App.css';
import addNotification from 'react-push-notification';
import {Notifications} from 'react-push-notification'

function App() {

  const handleNotification = (e)=>{
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
          // If permission is granted
          const notification = new Notification("Example Notification", {
              body: 'Message from msd',
              data: { hello: 'world' }
          });
          notification.addEventListener("close",ev=>{
            console.log(ev)
          })
      } 
      
  });
  }
  
  return (
    <div className="App">
      <button onClick={handleNotification} >Push Notification</button>
    </div>
  );
}

export default App;
