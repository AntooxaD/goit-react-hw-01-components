import './App.css';
import friends from './dataBase/friends.json';
import FriendList from './components/Friends/FriendList';
import user from './dataBase/user.json';
import Profile from './components/Social-profil/Profile';

function App() {
    return (
        <div>
            <FriendList friends={friends} />
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
        </div>
    );
}

export default App;
