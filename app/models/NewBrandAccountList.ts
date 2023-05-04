// ./src/stores/InputStore.ts
import { types, Instance } from 'mobx-state-tree';
import { api } from "../services/api"
export const InputModel = types.model('InputModel', {
    new_id: types.string,
    new_name: types.string,
    new_websiteUrl: types.string,
    new_category: types.string,
    new_keywordPrimary: types.string,
    new_keywordSecondary: types.string,
    new_socialTwitter: types.string,
    new_socialLinkedInProfile: types.string,
    new_socialInstagram: types.string,
    new_socialTikTok: types.string,
    new_socialFacebookPage: types.string,
    new_socialTwitterFollowers: types.string,
});

export const InputStoreModel = types
  .model('InputStore')
  .props({
    inputList: types.optional(types.array(InputModel), []),
  })
  .actions((store) => ({
    addInput(input: { new_id:string;new_name: string; new_websiteUrl: string;new_category:string;new_keywordPrimary:string;new_keywordSecondary:string;new_socialTwitter:string;
      new_socialLinkedInProfile:string;new_socialInstagram:string;new_socialTikTok:string;new_socialFacebookPage:string;new_socialTwitterFollowers:string }) {
        const existingInput = store.inputList.find((i) => i.new_id === input.new_id);
        console.log(existingInput)
        if (existingInput) {
         
          Object.assign(existingInput, input);
        } else {
          store.inputList.push(input);
        }
    },
    reset() {
      store.inputList.clear();
    },
    removeInput(id: string) {
      const index = store.inputList.findIndex((input) => input.new_id === id);
      if (index >= 0) {
        store.inputList.splice(index, 1);
      }
    },
  }));

export type InputModelType = Instance<typeof InputModel>;
export type InputStoreType = Instance<typeof InputStoreModel>;
