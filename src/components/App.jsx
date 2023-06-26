import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json'
import {CreateProfile} from "./Profile/Profile";
import {Statistics} from "./Statistics/Statistics";
import {FriendList} from "./FriendList/FriendList";
import {TransactionHistory} from './TransactionHistory/TransactionHistory';

export const App = () => {
  return <>
    <CreateProfile
      image={user.avatar}
      name={user.username}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <Statistics title="" stats={data} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />;
    </>;
}

