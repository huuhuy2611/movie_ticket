import { ILIST_TODO } from '@/store/atoms';
import { completedListState, inprogressListState } from '@/store/selectors';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const InProgressList = () => {
  const inProgressList = useRecoilValue(inprogressListState) as ILIST_TODO[];
  const setCompleted = useSetRecoilState(completedListState);
  const handleClick = (id: number) => () => {
    setCompleted(id); // truyền id vào
  };
  return (
    <div className="col">
      <h3>In-Progress</h3>
      <ul>
        {inProgressList.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={handleClick(item.id)}>Completed</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InProgressList;
