import style from './App.css';
import friends from './dataBase/friends.json';
import FriendList from './components/Friends/FriendList';
import user from './dataBase/user.json';
import Profile from './components/Social-profile/Profile';
import data from './dataBase/data.json';
import Statistics from './components/Statistics/Statistics';
import transactions from './dataBase/transaction.json';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

function App() {
    return (
        <div className={style.main}>
            <FriendList friends={friends} />
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <TransactionHistory items={transactions} />
        </div>
    );
}

export default App;
