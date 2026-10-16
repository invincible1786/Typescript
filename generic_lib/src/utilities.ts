export type MyPartial<T> = {
  [K in keyof T]?: T[K];
};

export type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type MyReadonly<T> = {
  readonly [K in keyof T]: T[K];
};