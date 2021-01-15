<script lang="ts">
  import RouterProvider from "./components/providers/RouterProvider.svelte";
  import UrqlProvider from "./components/providers/UrqlProvider.svelte";
  import { link } from "svelte-spa-router";
</script>

<UrqlProvider>
  <RouterProvider>
    <nav slot="default">
      <a href="/" use:link>Person List</a> -
      <a href="/about" use:link>About</a>
    </nav>
    <footer slot="footer">
      This website is powered by <a
        href="https://github.com/graphql/swapi-graphql"
        >the Star Wars API GraphQL Wrapper</a
      >
    </footer>
  </RouterProvider>
</UrqlProvider>
