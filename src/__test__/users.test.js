import makeContainer from '..';


describe('Creating & updating users:', () => {
  test('creating administrator', () => {
    const app = makeContainer();
    const [user] = app.services.user.createUser('administator',
      'pasha', 'pahanov', 'superAdmin', 'superPass1s', 'comment');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    expect(user).toMatchObject(repoUser);
  });

  test('creating & updating office manager', () => {
    const app = makeContainer();
    const [user] = app.services.user.createUser('office manager',
      'Yula', 'Ulanova', 'manager', 'superPass2', 'comment2');
    const repoUser = app.repositories.usersRepository.getAll()[0];
    expect(user).toMatchObject(repoUser);
    const updatingInfo = {
      id: user.id,
      fisrtName: 'Olya',
    };
    app.services.user.updateUser(updatingInfo);
    expect(user.firstName).toBe('Olya');
  });

  test('creating bad user', () => {
    const app = makeContainer();
    const user = app.services.user.createUser('office manager',
      123, 'Ulanova', 'manager', 'superPass3', 'comment2');
    expect(user[1][0].message).toBe('Only string parameter is accetable in first name.');
  });

  test('too short login', () => {
    const app = makeContainer();
    const user = app.services.user.createUser('office manager',
      'Anna', 'Ulanova', 'man', 'superPass4', 'comment2');
    expect(user[1][0].message).toBe('Length of login need between 5 and 20 symbols.');
  });

  test('bad password', () => {
    const app = makeContainer();
    const user = app.services.user.createUser('office manager',
      'Anna', 'Ulanova', 'manager', 'superpass', 'comment2');
    expect(user[1][0].message).toBe('Password must have only letters, numbers and "_".');
  });
});
