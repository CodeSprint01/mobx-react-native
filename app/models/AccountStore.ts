import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { BrandAccountModel } from "./BrandAccount"

/******
 * Account Store
 * Each account has the following
 * AccountID
 * Account Created
 * AccountProfile = []
 * UserProfile = []
 * BrandAccount = []
 * BusinessAccount = []
 */

export const AccountStoreModel = types
  .model("AccountStore")
  .props({
    brandAccountsList: types.array(BrandAccountModel),
  })

export interface AccountStore extends Instance<typeof AccountStoreModel> {}
export interface AccountStoreSnapshot extends SnapshotOut<typeof AccountStoreModel> {}

// @demo remove-file
