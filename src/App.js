import './App.css';
import {Provider} from 'react-redux'
import UserDetailComponent from './pages/dashboard/componenent/UserDetailsComponent';
import UserDetailStore from './store/UserDetailsStore'
function App() {
  return (
    <div className="App">
       <Provider store={UserDetailStore}>
        <UserDetailComponent/>
      </Provider>
    </div>
  );
}

export default App;