import { atom } from 'recoil';

export interface ILIST_TODO {
    id: number;
    content: string;
    status: string
}

const defaultData = [
    {
        id: 1,
        content: 'Action 1',
        status: 'new',
    },
    {
        id: 2,
        content: 'Action 2',
        status: 'inprogress',
    },
];

export const listTodoState = atom<ILIST_TODO[]>({
    key: 'listTodo',
    default: defaultData,
});