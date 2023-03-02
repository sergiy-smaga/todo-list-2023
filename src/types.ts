export type ITodo = {
  title: string;
  description: string;
  id: number;
  status: boolean;
};

export type ITodoPayload = {
  title: string;
  description: string;
};

export type IPropListElement = {
  item: ITodo;
};

export type IPropsModal = {
  children: React.ReactNode;
  onClose: () => void;
};
