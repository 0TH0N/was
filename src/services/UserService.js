import inspector from 'schema-inspector';
import BaseService from '../lib/BaseService';

export default class UserService extends BaseService {
  /* This function create new user, check him via his constraints and
  return result of validation.
  If new user have valid parametrs, save to users repository. */
  createUser(role, firstName, lastName, login, password, creatorId, comment) {
    const { User } = this.entities;
    const { usersRepository } = this.repositories;
    const creator = usersRepository.find(creatorId);
    const user = new User(role, firstName, lastName, login, password, creator, comment);
    const { constraints } = User;
    const inspectorAnswer = inspector.validate(constraints, user);
    if (inspectorAnswer.valid) {
      usersRepository.save(user);
    }
    return inspectorAnswer;
  }
}
