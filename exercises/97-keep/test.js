const rewire = require ("rewire");

test ('The function must return only the elements that match the given keeper element.', () => {
    const keep = rewire ('./app.js').__get__("keep");
    
    var output = keep([1, 2, 3, 2, 1], 2)

    expect().toBe();
    
})