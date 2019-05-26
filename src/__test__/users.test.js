import makeContainer from '..';


describe('Creating, updating, freeze and warm users:', () => {
  test('creating administrator', () => {
    const app = makeContainer();
    app.services.user.createUser('administator',
      'pasha', 'pahanov', 'superAdmin', 'superPass1s', 'comment');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    expect(repoUser).toBeTruthy();
  });

  test('creating & updating office manager', () => {
    const app = makeContainer();
    app.services.user.createUser('office manager',
      'Yula', 'Ulanova', 'manager', 'superPass2', 'comment2');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    expect(repoUser).toBeTruthy();
    const updatingInfo = {
      id: repoUser.id,
      firstName: 'Olya',
    };
    app.services.user.updateUser(updatingInfo);
    const repoUser2 = app.repositories.usersRepository.getAll()[0];
    expect(repoUser2.firstName).toBe('Olya');
  });

  test('bad update user', () => {
    const app = makeContainer();
    app.services.user.createUser('office manager',
      'Yula', 'Ulanova', 'manager', 'superPass2', 'comment2');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    expect(repoUser).toBeTruthy();
    const updatingInfo = {
      id: repoUser.id,
      firstName: '',
    };
    const answer = app.services.user.updateUser(updatingInfo);
    expect(answer[0]).toBe(null);
  });

  test('creating bad user', () => {
    const app = makeContainer();
    const answer = app.services.user.createUser('office manager',
      123, 'Ulanova', 'manager', 'superPass3', 'comment2');
    expect(answer[0]).toBe(null);
  });

  test('too short login', () => {
    const app = makeContainer();
    const answer = app.services.user.createUser('office manager',
      'Anna', 'Ulanova', 'man', 'superPass4', 'comment2');
    expect(answer[0]).toBe(null);
  });

  test('bad password', () => {
    const app = makeContainer();
    const answer = app.services.user.createUser('office manager',
      'Anna', 'Ulanova', 'manager', 'superpass', 'comment2');
    expect(answer[0]).toBe(null);
  });

  test('freeze user', () => {
    const app = makeContainer();
    app.services.user.createUser('warehouse worker',
      'pasha', 'pahanov', 'superAdmin', 'superPass1s', 'comment');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    repoUser.freeze();
    expect(repoUser.state).toBe('frozen');
  });

  test('warm user', () => {
    const app = makeContainer();
    app.services.user.createUser('warehouse worker',
      'pasha', 'pahanov', 'superAdmin', 'superPass1s', 'comment');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    repoUser.freeze();
    repoUser.warm();
    expect(repoUser.state).toBe('active');
  });
});
