<script lang="ts">
  import { initClient } from "@urql/svelte";
  initClient({
    url: "https://dodi-swapi-gql.herokuapp.com/",
  });
</script>

<slot />
