import makeContainer from '..';


describe('Creating & updating users:', () => {
  test('creating administrator', () => {
    const app = makeContainer();
    const [user] = app.services.user.createUser('administator',
      'pasha', 'pahanov', 'superAdmin', 'superPass', 'comment');
    const repoUser = app.repositories.userRepository.getAll()[0];
    expect(user).toMatchObject(repoUser);
  });

  test('creating & updating office manager', () => {
    const app = makeContainer();
    const [user] = app.services.user.createUser('office manager',
      'Yula', 'Ulanova', 'manager', 'superPass', 'comment2');
    const repoUser = app.repositories.userRepository.getAll()[0];
    expect(user).toMatchObject(repoUser);

    const updatingInfo = {
      id: user.id,
      state: 'frozen',
    };
    app.services.user.updateUser(updatingInfo);
    expect('frozen').toBe(user.state);
  });

  test('creating bad user', () => {
    const app = makeContainer();
    const user = app.services.user.createUser('office manager',
      123, 'Ulanova', 'manager', 'superPass', 'comment2');
    expect(user[1][0].message).toBe('Only string parameter is accetable in first name.');
  });
});
