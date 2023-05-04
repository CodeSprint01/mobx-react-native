import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { AuthenticationStoreModel } from "./AuthenticationStore" // @demo remove-current-line
import { EpisodeStoreModel } from "./EpisodeStore" // @demo remove-current-line
import { BrandAccountModel } from "./BrandAccount"
import { BrandAccountListModel } from "./BrandAccountList"
import { InputStoreModel, InputStoreType } from './NewBrandAccountList';
/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  authenticationStore: types.optional(AuthenticationStoreModel, {}), // @demo remove-current-line
  episodeStore: types.optional(EpisodeStoreModel, {}), // @demo remove-current-line
  brandAccount: types.optional(BrandAccountModel, {}),
  // brandAccountList: types.optional(types.array(BrandAccountModel), []),
  // brandAccountList: types.optional(BrandAccountListModel, {}),
  brandAccountList: types.optional(InputStoreModel, {}),
})


/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
