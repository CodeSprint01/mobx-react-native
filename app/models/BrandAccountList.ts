import { destroy,getSnapshot, Instance, SnapshotOut, types,SnapshotIn } from "mobx-state-tree"
// import { BrandAccount, BrandAccountModel } from "./BrandAccount"
// import { withSetPropAction } from "./helpers/withSetPropAction"
export const InputModel = types.model('InputModel', {
  // name: types.string,
  // email: types.string,
  new_id: types.number,
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
});
export const BrandAccountListModel = types
  .model("BrandAccountList")
  .props({
    brandAccountItems: types.optional(types.array(InputModel), []),
    // brandAccountItems: types.array(BrandAccountModel),
    // inputList: types.optional(types.array(InputModel), []),
  })
  // .actions(withSetPropAction)
  .actions((store) => ({
    addInput(input: { new_id:number;new_name: string; new_websiteUrl: string;new_category:string;new_keywordPrimary:string;new_keywordSecondary:string;new_socialTwitter:string;new_socialInstagram:string;new_socialTikTok:string;new_socialFacebookPage:string; }) {
      store.brandAccountItems.push(input);
    },
    // addBrandAccount(brandAccount: BrandAccount) {
    //   console.log("addBrandAccount")
    //   console.log(brandAccount)
    //   store.brandAccountItems.push(brandAccount);
    //   console.log(JSON.stringify(store.brandAccountItems));
    // },
    
    // addBrandAccount(brandAccount) {
    //   console.log("addBrandAccount");
    //   console.log(brandAccount);
    //   store.brandAccountItems.push(brandAccount);
    //   console.log(JSON.stringify(store.brandAccountItems));
    // },
    // removeBrandAccount(brandAccount: BrandAccount) {
    //   destroy(brandAccount);
    // }
  }))

export interface BrandAccountStore extends Instance<typeof BrandAccountListModel> {}
export interface BrandAccountStoreSnapshot extends SnapshotOut<typeof BrandAccountListModel> {}
// export interface BrandAccountStoreSnapshot extends SnapshotIn<typeof BrandAccountListModel> {}

// @demo remove-file