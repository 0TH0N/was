

export default class BaseService {
  constructor({ entities, repositories }) {
    this.entities = entities;
    this.repositories = repositories;
  }
}
