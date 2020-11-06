import { LightningElement } from "lwc";
import fetchProfileInfo from "./fetchProfileInfo";

export default class ProfileInfoTile extends LightningElement {
  profile = {
    name: "John Doe",
    jobTitle: "CEO",
    avatar: ""
  };
  error = false;

  async connectedCallback() {
    const response = await fetchProfileInfo();
    if (response.data) {
      this.profile = {
        name: `${response.data.me.person.firstName} ${response.data.me.person.lastName}`,
        jobTitle: response.data.me.person.jobTitle,
        avatar: response.data.me.person.avatar
      };
    } else {
      this.error = true;
      console.log(`Error: ${response.error}`);
      console.log(`Message: ${response.message}`);
    }
  }
}
