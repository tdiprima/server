fetch('/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({query: "{ books { name } }"})
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));

// ES5 be like
/*
'use strict';

fetch('/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify({ query: "{ books { name } }" })
}).then(function (r) {
    return r.json();
}).then(function (data) {
    return console.log('data returned:', data);
});
*/