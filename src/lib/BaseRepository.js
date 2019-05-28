import _ from 'lodash';


export default class {
  data = [];

  getAll() {
    return this.data;
  }

  save(entity) {
    this.data.push(entity);
    return true;
  }

  findAll(params) {
    return _.filter(this.data, params);
  }

  findBy(params) {
    return this.findAll(params).length > 0 ? this.findAll(params)[0] : null;
  }

  find(id) {
    return this.data.find(entity => entity.id === id);
  }
}
