import { selector } from 'recoil';
import { listTodoState } from '../atoms';

export const newListState = selector({
  // newListState này sẽ chứa danh sách các action có trạng thái là new.
  key: 'newList',
  get: ({ get }) => {
    const list = get(listTodoState); // đây là cách để lấy cả list todo đã tạo với atom ở bước trên.
    return list.filter((item) => item.status === 'new'); // chọn và trả về những thằng có status là new.
  },
  set: ({ get, set }, newValue) => {
    const list = get(listTodoState);
    const newTodo = {
      id: new Date().getTime(), // id tạo vậy để khỏi lo bị duplicate
      content: newValue as string, // tên hành động được truyền vào
      status: 'new', // hành động mới nên có status là new
    };
    set(listTodoState, [...list, newTodo]); // hàm set dùng để thay đổi giá trị của recoil state từ atom
  },
});

export const inprogressListState = selector({
  key: 'inprogressList',
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter(item => item.status === 'inprogress');
  },
  set: ({ get, set }, id) => {
    // để set 1 cái hành động có id này thành trạng thái inprogress
    const list = get(listTodoState);
    set(
      listTodoState,
      list.map((item) =>
        item.id === id ? { ...item, status: 'inprogress' } : item
      )
    );
  },
});

export const completedListState = selector({
  key: 'completedList',
  get: ({ get }) => {
    const list = get(listTodoState);
    return list.filter((item) => item.status === 'completed');
  },
  set: ({ get, set }, id) => {
    // để set 1 cái hành động có id này thành trạng thái completed
    const list = get(listTodoState);
    set(
      listTodoState,
      list.map((item) =>
        item.id === id ? { ...item, status: 'completed' } : item
      )
    );
  },
});
