<script lang="ts">
  import { initClient } from "@urql/svelte";
  initClient({
    url: "https://dodi-swapi-gql.herokuapp.com/",
  });

  /* This component abstracts away the initialization of URQL,
   * and any children of the component are provided with the
   * URQL client.
   */

  //! This should only be used once!
  //TODO: refactor component to provide access to different APIs via URL prop
</script>

<slot />
