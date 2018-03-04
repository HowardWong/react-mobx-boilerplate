import { observable, action, autorun } from 'mobx';

const side_effect = () => new Promise(f => setTimeout(f, 500));

export default class Resource {

  constructor() {

    // no need to handle like this
    // just for example
    autorun(() => {
      if(this.count <= 0) return;
      this.add_record({
        id: this.count,
        timestamp: Array.prototype.slice.call(new Date().toISOString(), 11, 19)
      })
    });

    let cancel_alert;
    cancel_alert = autorun(() => {
      if(this.record.length > 3) {
        alert('trigger over 3 times');
        if(typeof cancel_alert === 'function') {
          cancel_alert();
        }
      }
    });
  }

  @observable count = 0;
  
  @observable record = []

  @action.bound
  async add() {
    await side_effect();
    this.count++;
  }

  @action.bound
  add_record(row) {
    this.record.push(row);
  }

}