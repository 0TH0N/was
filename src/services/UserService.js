
import BaseService from '../lib/BaseService';


export default class UserService extends BaseService {
  createUser(role, firstName, lastName, login, password, comment) {
    const user = new this.entities.User(role, firstName,
      lastName, login, password, comment);
    /* const errors = this.entities.User.validation.validate(user);
    if (errors.length > 0) {
      return [null, errors];
    } */
    this.repositories.usersRepository.save(user);
    return [user, null];
  }

  updateUser(updatingInfo) {
    const user = this.repositories.usersRepository.find(updatingInfo.id);
    Object.keys(updatingInfo).forEach((propName) => {
      user[propName] = updatingInfo[propName];
    });
    const errors = this.entities.User.validation.validate(user);
    if (errors.length > 0) {
      return [null, errors];
    }
    this.repositories.usersRepository.update(user);
    return [user, null];
  }
}
