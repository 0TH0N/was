import Schema from 'validate';
import StateMachine from 'javascript-state-machine';
import BaseEntity from '../lib/BaseEntity';

export default class User extends BaseEntity {
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
    login: {
      type: String,
      length: { min: 5, max: 20 },
      message: {
        type: 'Only string parameter is accetable for login.',
        length: 'Length of login need between 5 and 20 symbols.',
      },
    },
    password: {
      type: String,
      length: { min: 6, max: 20 },
      match: /[A-Za-z]+[0-9]+\w*/,
      message: {
        type: 'Only string parameter is accetable for login.',
        length: 'Length of password need between 6 and 20 symbols.',
        match: 'Password must have only letters, numbers and "_".',
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
    // this.state = 'active';
    // eslint-disable-next-line no-underscore-dangle
    this._fsm();
  }
}


StateMachine.factory(User, {
  init: 'active',
  transitions: [
    { name: 'freeze', from: 'active', to: 'frozen' },
    { name: 'warm', from: 'frozen', to: 'active' },
  ],
});
