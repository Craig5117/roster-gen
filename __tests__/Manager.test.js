const Manager = require('../lib/Manager');

test('Acquires Employee properties', () => {
    const manager = new Manager('Abe', 123, 'abe@email.com');
    expect(manager.name).toBe('Abe');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
  });

  test('Creates Manager object with Manager specific properties', () => {
    const manager = new Manager('Bilbo', 456, 'bilbo@email.com', 1);
    expect(manager.officeNumber).toEqual(expect.any(Number));
  });

  test('Overwrites Employee role (Manager)', () => {
    const manager = new Manager('Dan', 100, 'dan@email.com', 2);
    expect(manager.getRole()).toBe('Manager');
  });