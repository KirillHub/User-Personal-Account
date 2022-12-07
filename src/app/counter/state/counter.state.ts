
export interface TCounterState {
  counter: number
  textInfo: string
};

export const initialState: TCounterState = {
  counter: 0,
  textInfo: 'Set counter && change this label'
};
