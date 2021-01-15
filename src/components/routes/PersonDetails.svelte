<script lang="ts">
  import PersonDetailsData from "../data/PersonDetailsData.svelte";
  export let params: { id: string } = { id: "" };

  /**
   * This is the route component for PersonDetailsData.
   * It should contain no business logic except for
   * UI purposes
   */
</script>

<h1>Person details route</h1>
<PersonDetailsData {params} />
