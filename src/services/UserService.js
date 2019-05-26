import inspector from 'schema-inspector';
import BaseService from '../lib/BaseService';

export default class UserService extends BaseService {
  createUser(role, firstName, lastName, login, password, comment) {
    const user = new this.entities.User(role, firstName,
      lastName, login, password, comment);
    const { constraints } = this.entities.User;
    const answer = inspector.validate(constraints, user);
    if (!answer.valid) {
      return [null, answer.error];
    }
    this.repositories.usersRepository.save(user);
    return [user, null];
  }

  updateUser(updatingInfo) {
    const user = this.repositories.usersRepository.find(updatingInfo.id);
    Object.keys(updatingInfo).forEach((propName) => {
      user[propName] = updatingInfo[propName];
    });
    const { constraints } = this.entities.User;
    const answer = inspector.validate(constraints, user);
    if (!answer.valid) {
      return [null, answer.error];
    }
    this.repositories.usersRepository.update(user);
    return [user, null];
  }
}
