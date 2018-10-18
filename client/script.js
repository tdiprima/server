/**
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
 * Run from browser:
 */

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
