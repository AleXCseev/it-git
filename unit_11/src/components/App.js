import './App.css';
import AddUser from "../containers/AddUser"
import UserList from '../containers/UserList';

function App() {
  return (
    <div className="App">
      <AddUser/>
      <UserList/>
    </div>
  );
}

export default App;
