import { Instance, SnapshotOut, types } from "mobx-state-tree"

export const UserProfileStoreModel = types
  .model("UserProfileStore")
  .props({
    authToken: types.maybe(types.string),
    authEmail: "",
  })
  .views((store) => ({
    get isAuthenticated() {
      return !!store.authToken
    },
    get validationError() {
      if (store.authEmail.length === 0) return "can't be blank"
      if (store.authEmail.length < 6) return "must be at least 6 characters"
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(store.authEmail))
        return "must be a valid email address"
      return ""
    },
  }))
  .actions((store) => ({
    setAuthToken(value?: string) {
      store.authToken = value
    },
    setAuthEmail(value: string) {
      store.authEmail = value.replace(/ /g, "")
    },
    logout() {
      store.authToken = undefined
      store.authEmail = ""
    },
  }))

export interface UserProfileStore extends Instance<typeof UserProfileStoreModel> {}
export interface UserProfileStoreSnapshot extends SnapshotOut<typeof UserProfileStoreModel> {}

// @demo remove-file
