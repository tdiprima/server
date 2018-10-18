/**
 * https://graphql.org/graphql-js/passing-arguments/
 */
var id = "5bc3aa19bd67b10dd9d24558";

// get one book
var query = `
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;

fetch('/graphql', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    body: JSON.stringify({
        query,
        variables: { id },
    })
})
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
