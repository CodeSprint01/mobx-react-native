import { getRoot, destroy, IStateTreeNode } from "mobx-state-tree"
import { RootStore, RootStoreModel } from "../RootStore"

/**
 * Returns a RootStore object in strongly typed way
 * for stores to access other stores.
 */
export const getRootStore = (self: IStateTreeNode): RootStore => {
  return getRoot<typeof RootStoreModel>(self)
}


export const remove =  (self: IStateTreeNode): any=> {
  destroy(self)
}
