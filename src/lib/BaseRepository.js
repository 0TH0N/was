import _ from 'lodash';


export default class {
  data = [];

  getAll() {
    return this.data;
  }

  save(entity) {
    if (this.data.indexOf(entity) !== -1) {
      throw new Error('Entity is already exist');
    }
    this.data.push(entity);
    return true;
  }

  update(entity) {
    if (_.findIndex(this.data, item => (item.id === entity.id)) === -1) {
      throw new Error('Entity not found');
    }
    this.data.filter(item => item.id !== entity.id).push(entity);
    return true;
  }

  findAll(params) {
    return _.filter(this.data, params);
  }

  findBy(params) {
    return this.findAll(params).length > 0 ? this.findAll(params)[0] : null;
  }

  find(id) {
    const result = _.filter(this.data, entity => entity.id === id);
    return result.length === 0 ? null : result[0];
  }
}
