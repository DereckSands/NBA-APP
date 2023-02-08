import React from 'react';
import './App.css';
import stats from './scrape/playerStats.json'
import Player from './components/player';
import LoginForm from "./components/loginform";


export class App extends React.Component {
  render(){
    return (
      <div className="card col-12">
        <div className="card-header">Players</div>
          <div className="card-body">
            <div className="row">
              {stats.map((el, i) =>
              <Player details={el.data[0]} name={el.data[0].first_name+' '+el.data[0].last_name} key={i}/>)}
            </div>
        </div>
      </div>
    );
  }
}
export default App;