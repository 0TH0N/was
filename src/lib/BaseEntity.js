import uuidV1 from 'uuid/v1';

export default class {
  constructor(creator = null, comment = null) {
    this.id = uuidV1();
    this.creator = creator;
    this.created_at = new Date();
    this.comment = comment;
  }
}
