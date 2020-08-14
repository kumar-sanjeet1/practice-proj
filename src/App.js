import React, { useState } from 'react';
import './App.css';
import { UploadComponent } from './components/upload';
import { UsersComponent } from './components/users';
import { Layout } from './components/layout'


function App() {

  let [state, setState] = useState([{
    mobile: '8888888888', 
    id: 1,
    earning: 100,
    action: 'approve'
}]);

  const  uploadUsers = (users) => {
    console.log(users)
    setState(users);
  }

  return (
    <div className="App">
      <Layout>
        <UploadComponent uploadUsers={uploadUsers} />
        <UsersComponent users={state} />
      </Layout>
    </div>
  );
}

export default App;
