test('devo conhecer as assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('devo saber trabalhar com objetos', () => {
   const obj = { name: 'joao', email: 'joao@gmail.com' };
   expect(obj).toHaveProperty('name');
   expect(obj).toHaveProperty('name', 'joao');
   expect(obj.name).toBe('joao');

   const obj2 = { name: 'joao', email: 'joao@gmail.com' };
   expect(obj).toEqual(obj2)
});