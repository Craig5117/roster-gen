const Employee = require("../lib/Employee");

test("Creates an Employee object", () => {
  const employee = new Employee("Abe", 123, "abe@email.com");
  expect(employee.name).toBe("Abe");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("Returns Employee name", () => {
  const employee = new Employee("Bilbo", 456, "bilbo@email.com");
  expect(employee.getName()).toBe("Bilbo");
});

test("Returns Employee ID", () => {
  const employee = new Employee("Cici", 789, "cici@email.com");
  expect(employee.getId()).toBe("ID: 789");
});

test("Returns Employee email", () => {
  const employee = new Employee("Dan", 100, "dan@email.com");
  expect(employee.getEmail()).toBe("dan@email.com");
});

test("Returns Employee Role (Employee)", () => {
  const employee = new Employee("Ed", 110, "ed@email.com");
  expect(employee.getRole()).toBe("Employee");
});

test("Returns Employee icon", () => {
  const employee = new Employee("Fred", 117, "fred@email.com");
  expect(employee.getIcon()).toBe("");
});

test("Returns Employee special property string", () => {
  const employee = new Employee("George", 343, "george@ofthejungle.com");
  expect(employee.getSpec()).toBe("");
});

test("Returns rendered HTML card for Employee", () => {
  const employee = new Employee("Henry", 787, "henry@email.com");
  expect(employee.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">Henry</h2>
            <h3 class="has-text-white subtitle is-4"><i class=" mr-2"></i>Employee</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 787</p>
                <a href="mailto:henry@email.com"><p class="p-4">Email: henry@email.com</p></a>
                
            </div>
        </div>
    </div>`);
});
