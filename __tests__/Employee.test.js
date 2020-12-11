const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Abe', 123, 'abe@email.com');
    expect(employee.name).toBe('Abe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('Returns Employee name', () => {
    const employee = new Employee('Bilbo', 456, 'bilbo@email.com');
    expect(employee.getName()).toBe('Bilbo');
});

test('Returns Employee ID', () => {
    const employee = new Employee('Cici', 789, 'cici@email.com');
    expect(employee.getId()).toBe('ID: 789');
});

test('Returns Employee email', () => {
    const employee = new Employee('Dan', 100, 'dan@email.com');
    expect(employee.getEmail()).toBe('Email: dan@email.com');
});
 
test('Returns Employee Role (Employee)', () => {
    const employee = new Employee('Ed', 110, 'ed@email.com');
    expect(employee.getRole()).toBe('Employee');
})
//     expect 