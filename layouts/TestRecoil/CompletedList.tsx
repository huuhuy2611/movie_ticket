import { ILIST_TODO } from '@/store/atoms';
import { completedListState } from '@/store/selectors';
import React from 'react';
import { useRecoilValue } from 'recoil';

const CompletedList = () => {
  const completedList = useRecoilValue(completedListState) as ILIST_TODO[];
  return (
    <div className="col">
      <h3>Completed</h3>
      <ul>
        {completedList.map((item) => (
          <li key={item.id}>{item.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
