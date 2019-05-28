import StateMachine from 'javascript-state-machine';
import BaseEntity from '../lib/BaseEntity';

export default class User extends BaseEntity {
  // This constraints need for validation user parametrs via schema-inspector
  static constraints = {
    type: User,
    properties: {
      role: { type: 'string', minLength: 1 },
      firstName: { type: 'string', minLength: 1 },
      lastName: { type: 'string', minLength: 1 },
      login: { type: 'string', minLength: 4 },
      password: { type: 'string', minLength: 6, pattern: /[A-Za-z]+[0-9]+\w*/ },
    },
  };


  constructor(role, firstName, lastName, login, password, creator, comment) {
    super(creator, comment);
    this.role = role;
    this.firstName = firstName;
    this.lastName = lastName;
    this.login = login;
    this.password = password;
    // eslint-disable-next-line no-underscore-dangle
    this._fsm();
  }
}

// This is state machine for user state. Block and unblock him.
StateMachine.factory(User, {
  init: 'active',
  transitions: [
    { name: 'freeze', from: 'active', to: 'frozen' },
    { name: 'warm', from: 'frozen', to: 'active' },
  ],
});
