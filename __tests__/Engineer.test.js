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

test('Overwrites Employee icon based on role (Engineer)', () => {
  const engineer = new Engineer('Ed', 110, 'ed@email.com', 'edHub');
  expect(engineer.getIcon()).toBe(`fas fa-glasses`);
});

test('Overwrites Employee spec based on role (Engineer)', () => {
  const engineer = new Engineer('Fred', 120, 'fred@email.com', 'fredHub');
  expect(engineer.getSpec()).toBe(`<a href="https://github.com/fredHub" target="_blank"><p class="p-4">GitHub: fredHub</p></a>`);
});

test("Returns rendered HTML card for Engineer", () => {
  const engineer = new Engineer('George', 130, 'george@email.com', 'gHub');
  expect(engineer.render()).toBe(`
    <div class="card column is-one-quarter is-full-mobile m-3 p-0">
        <div class="card-header is-block has-background-info p-4">
            <h2 class="title is-3 has-text-white">George</h2>
            <h3 class="has-text-white subtitle is-4"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-content has-background-light">
            <div class="has-background-white">
                <p class="p-4">ID: 130</p>
                <a href="mailto:george@email.com"><p class="p-4">Email: george@email.com</p></a>
                <a href="https://github.com/gHub" target="_blank"><p class="p-4">GitHub: gHub</p></a>
            </div>
        </div>
    </div>`);
});




