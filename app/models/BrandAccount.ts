import { destroy, getParent, Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { api } from "../services/api"
import { withSetPropAction } from "./helpers/withSetPropAction"
// import type { EpisodeSnapshotIn } from "./Episode" 
/* import { formatDate } from "../utils/formatDate"
import { translate } from "../i18n" */

interface Enclosure {
  id: string,
  name: string
  websiteUrl: string
  category: string
  keywordPrimary: string
  keywordSecondary: string
  socialTwitter: string
  socialLinkedInProfile: string
  socialInstagram: string
  socialTikTok: string
  socialFacebookPage: string
}

/**
 * This represents an episode of React Native Radio.
 */
export const BrandAccountModel = types
  .model("BrandAccount")
  .props({
    id: "",
    name: "",
    websiteUrl: "",
    category: "",
    keywordPrimary: "",
    keywordSecondary: "",
    socialTwitter: "",
    socialLinkedInProfile: "",
    socialInstagram: "",
    socialTikTok: "",
    socialFacebookPage: "",
    socialTwitterFollowers: "",
    enclosure: types.frozen<Enclosure>(),
  })
  .actions(withSetPropAction)
  .actions((store) => ({
    setBrandAccountName(value?: string) {
      // store.id=Date.now().toString();
      
      store.name = value
    },
    setBrandAccountWebsiteUrl(value?: string) {
      store.websiteUrl = value
    },
    setBrandAccountCategory(value?: string) {
      store.category = value
    },
    setBrandAccountKeywordPrimary(value?: string) {
      store.keywordPrimary = value
    },
    setBrandAccountKeywordSecondary(value?: string) {
      store.keywordSecondary = value
    },
    setBrandAccountSocialTwitter(value?: string) {
      store.socialTwitter = value;
    },
    setBrandAccountSocialLinkedInProfile(value?: string) {
      store.socialLinkedInProfile = value;
    },
    setBrandAccountSocialInstagram(value?: string) {
      store.socialInstagram = value;
    },
    setBrandAccountSocialTikTok(value?: string) {
      store.socialTikTok = value;
    },
    setBrandAccountSocialFacebookPage(value?: string) {
      store.socialFacebookPage = value;
    },
    setBrandAccountSocialTwitterFollowers(value?: string) {
      store.socialTwitterFollowers = value;
    },
    resetBrandAccount() {
      store.id = "";
      store.name = "";
      store.websiteUrl = "";
      store.category = "";
      store.keywordPrimary = "";
      store.keywordSecondary = "";
      store.socialTwitter = "";
      store.socialLinkedInProfile = "";
      store.socialInstagram = "";
      store.socialTikTok = "";
      store.socialFacebookPage = "";
      store.socialTwitterFollowers = "";
    },
    async getFollowers(value?: string) {
      const response = await api.getSocialTwitterFollowers(value)
      console.log("Twitter: " + value);
      if(response){
       console.log("response")
       console.log(response)
      const followers = JSON.parse(response).public_metrics.followers_count.toString();
      /* store.setProp("socialTwitterFollowers", followers.toString()); */
      // this.setBrandAccountSocialFacebookPage(followers);
      console.log("Follower response")

      this.setBrandAccountSocialTwitterFollowers(followers);
      // console.log("Followers:" + store.socialTwitterFollowers);
      console.log("Followers String:" + followers);
      console.log(JSON.parse(response))
      return followers;

      }
      this.setBrandAccountSocialTwitterFollowers('0');
      return "";
    },
  }))
  .views((brandAccount) => ({
    get brandAccountName() {
      return brandAccount.name?.trim(); 
    },
  }))

export interface BrandAccount extends Instance<typeof BrandAccountModel> {}
/* export interface BrandAccountList extends Instance<typeof BrandAccountListModel> {} */
export interface BrandAccountSnapshotOut extends SnapshotOut<typeof BrandAccountModel> {}
export interface BrandAccountSnapshotIn extends SnapshotIn<typeof BrandAccountModel> {}

// @demo remove-file
