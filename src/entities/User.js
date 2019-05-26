import Schema from 'validate';
import BaseEntity from '../lib/BaseEntity';

export default class BaseUser extends BaseEntity {
  static validation = new Schema({
    role: {
      required: true,
      message: 'Role for user isn\'t assigned.',
    },
    firstName: {
      type: String,
      required: true,
      message: {
        type: 'Only string parameter is accetable in first name.',
        required: 'First name can\'t be blank.',
      },
    },
    lastName: {
      type: String,
      required: true,
      message: {
        type: 'Only string parameter is accetable in last name.',
        required: 'Last name can\'t be blank.',
      },
    },
  });

  constructor(role, firstName, lastName, login, password, comment) {
    super(comment);
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    this.state = 'active';
  }
}
