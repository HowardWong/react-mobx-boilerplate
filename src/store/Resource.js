import { observable, action } from 'mobx';

export default class Resource {

  constructor() {
    this.count = 0;
  }

  @observable count
  
  record = []

  @action
  add() {
    this.count++;
  }
}