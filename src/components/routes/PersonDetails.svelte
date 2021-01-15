<script lang="ts">
  import PersonDetailsData from "../data/PersonDetailsData.svelte";
  export let params: { id: string } = { id: "" };
</script>

<h1>Person details route</h1>
<PersonDetailsData {params} />
