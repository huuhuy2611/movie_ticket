import CompletedList from '@/layouts/TestRecoil/CompletedList';
import InProgressList from '@/layouts/TestRecoil/InProgressList';
import NewActionInput from '@/layouts/TestRecoil/NewActionInput';
import NewList from '@/layouts/TestRecoil/NewList';
import React from 'react';
import { RecoilRoot } from 'recoil';

function TestRecoil() {
  return (
    <RecoilRoot>
      <div className="App">
        <header className="App-header">
          <h1>To-do List</h1>
        </header>
        <NewActionInput />
        <div className="content">
          <NewList />
          <InProgressList />
          <CompletedList />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default TestRecoil;
