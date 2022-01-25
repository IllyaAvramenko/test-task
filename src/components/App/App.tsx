import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Folder from '../Folder/Folder';
import { Folders } from '../Folders/Folders';
import './App.css';

const App: FC = () => {

  return (
    <div className={'app'}>
      <Switch>
        <Route exact path='/' render={() => <Redirect to={'/folders'}/>}/>
        <Route exact path='/folders' render={() => <Folders />}/>
        <Route path='/folders/:folder?' render={() => <Folder />}/>
      </Switch>
    </div>
  )
}

export default App
