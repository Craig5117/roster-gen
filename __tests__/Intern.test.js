const Intern = require('../lib/Intern');

test('Acquires Employee properties', () => {
  const intern = new Intern('Abe', 123, 'abe@email.com');
  expect(intern.name).toBe('Abe');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
});

test('Creates Intern object with Intern specific properties', () => {
  const intern = new Intern('Bilbo', 456, 'bilbo@email.com', 'University1');
  expect(intern.school).toEqual(expect.any(String));
});

test('Gets school name', () => {
  const intern = new Intern('Cici', 789, 'cici@email.com', 'University2');
  expect(intern.getSchool()).toBe('School: University2');
});

test('Overwrites Employee role (Intern)', () => {
    const intern = new Intern('Dan', 100, 'dan@email.com', 'University3');
    expect(intern.getRole()).toBe('Intern');
})