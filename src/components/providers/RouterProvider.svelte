<script lang="ts">
  // Imports
  import AllPeople from "../routes/AllPeople.svelte";
  import PersonDetails from "../routes/PersonDetails.svelte";
  import Router from "svelte-spa-router";

  // Route definitions
  // Not separated into a TS file as it's only used here
  const routes = {
    "/": AllPeople,
    "/person/:id": PersonDetails,
  };

  /* This is a provider for the Router component
   * from svelte-spa-router.
   * It's used inside the application component to
   * turn the component into a layout component,
   * where anything in the default slot is put above the route
   * and anything in the footer slot is put below the route.
   *
   * I used this pattern in order to avoid wrapping every route in
   * a layout component and instead use the App.svelte component
   * to provide the global layout
   */
</script>

<slot />
<Router {routes} />
<slot name="footer" />
