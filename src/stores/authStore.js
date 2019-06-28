import { observable, action } from 'mobx';

class AuthStore {
  @observable
  inProgress = false;
}

export default new AuthStore();
