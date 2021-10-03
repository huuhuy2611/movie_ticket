import { ILIST_TODO } from '@/store/atoms';
import { inprogressListState, newListState } from '@/store/selectors';
import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const NewList = () => {
  const newList = useRecoilValue(newListState) as ILIST_TODO[]; // ở đây chỉ hiện data, nên useRecoilValue là đủ.
  const setInprogress = useSetRecoilState(inprogressListState);
  const handleClick = (id: number) => () => {
    setInprogress(id); // truyền id vào
  };
  return (
    <div className="col">
      <h3>New</h3>
      <ul>
        {newList.map((item) => (
          <li key={item.id}>
            {item.content}
            <button onClick={handleClick(item.id)}>In-Progress</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
