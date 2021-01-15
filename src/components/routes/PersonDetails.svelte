<script lang="ts">
  import PersonDetailsData from "../data/PersonDetailsData.svelte";
  import { pop as popRoute } from "svelte-spa-router";
  export let params: { id: string } = { id: "" };

  /**
   * This is the route component for PersonDetailsData.
   * It should contain no business logic except for
   * UI purposes
   */
</script>

<h1>Person details</h1>
<button role="link" on:click={popRoute}>Go Back</button>
<PersonDetailsData {params} />
