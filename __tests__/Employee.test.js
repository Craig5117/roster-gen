const Employee = require('../lib/Employee');

test('Creates an Employee object', () => {
    const employee = new Employee('Abe', 123, 'abe@email.com');
    expect(employee.name).toBe('Abe');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// expect(employee.getName)
//     expect 
//     expect
//     expect 