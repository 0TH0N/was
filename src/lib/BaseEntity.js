import uuidV1 from 'uuid/v1';

export default class {
  constructor(comment = null) {
    this.id = uuidV1();
    this.created_at = new Date();
    this.comment = comment;
  }
}
