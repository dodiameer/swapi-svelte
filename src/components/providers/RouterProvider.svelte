<script lang="ts">
  import AllPeople from "../routes/AllPeople.svelte";
  import PersonDetails from "../routes/PersonDetails.svelte";
  import Router from "svelte-spa-router";
  const routes = {
    "/": AllPeople,
    "/person/:id": PersonDetails,
  };
</script>

<slot />
<Router {routes} />
<slot name="footer" />
