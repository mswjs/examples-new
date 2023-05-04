<script>
  /** @type {import('./$types').PageData} */
  export let data;

  let movies;

  function handleFetchMovies() {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query: `
          query ListMovies {
            movies {
              id
              title
            }
          }
        `
      })
    })
      .then((response) => response.json())
      .then((response) => (movies = response.data.movies));
  }
</script>

<p>Hello, {data.user.firstName}!</p>

<div>
  {#if movies}
    <ul>
      {#each movies as movie}
        <li>{movie.title}</li>
      {/each}
    </ul>
  {/if}
  <button on:click={handleFetchMovies}>Fetch movies</button>
</div>
