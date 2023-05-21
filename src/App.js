import './App.css';
import Greeting from './Components/Greeting';
import AvatarComponent from './Components/AvatarComponent';
import CounterComponent from './Components/CounterComponent';
import PeopleList from './Components/PeopleList';
import ProfileComponent from './Components/ProfileComponent';

function App() {
  return (
    <div className="App">
      <Greeting/>
      <AvatarComponent />
      <checkingCondition />
      <CounterComponent />
      <people/>
      <PeopleList />
      <ProfileComponent />
      
      
    </div>
  );
}

export default App;
