import BaseEntity from '../../lib/BaseEntity';

export default class BaseUser extends BaseEntity {
  constructor(firstName, lastName, login, password, comment) {
    super(comment);
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
  }
}
