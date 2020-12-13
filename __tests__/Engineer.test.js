const Engineer = require('../lib/Engineer');

test('Acquires Employee properties', () => {
  const engineer = new Engineer('Abe', 123, 'abe@email.com');
  expect(engineer.name).toBe('Abe');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
});

test('Creates Engineer object with Engineer specific properties', () => {
  const engineer = new Engineer('Bilbo', 456, 'bilbo@email.com', 'bilboHub');
  expect(engineer.github).toBe('bilboHub');
});

test('Generates a GitHub link', () => {
  const engineer = new Engineer('Cici', 789, 'cici@email.com', 'ciciHub');
  expect(engineer.getGithub()).toBe('ciciHub');
});

test('Overwrites Employee role (Engineer)', () => {
  const engineer = new Engineer('Dan', 100, 'dan@email.com', 'danHub');
  expect(engineer.getRole()).toBe('Engineer');
});
