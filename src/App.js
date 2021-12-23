
import './App.css';
import friends from './dataBase/friends.json';
import FriendList from './components/Friends/FriendList'; 

function App() {
  return (<div><FriendList friends={friends} /></div>);
}

export default App;

