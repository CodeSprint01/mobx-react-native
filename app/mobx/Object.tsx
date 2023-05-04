// ./src/stores/InputStore.ts
import { types, Instance } from 'mobx-state-tree';

export const InputModel = types.model('InputModel', {
  name: types.string,
  email: types.string,
});

export const InputStoreModel = types
  .model('InputStore')
  .props({
    inputList: types.optional(types.array(InputModel), []),
  })
  .actions((store) => ({
    addInput(input: { name: string; email: string }) {
      store.inputList.push(input);
    },
  }));

export type InputModelType = Instance<typeof InputModel>;
export type InputStoreType = Instance<typeof InputStoreModel>;
