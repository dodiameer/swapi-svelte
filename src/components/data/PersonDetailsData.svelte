<script lang="ts">
  // Imports
  import { query, operationStore } from "@urql/svelte";
  import FetchError from "../ui/FetchError.svelte";
  import LoadingAlert from "../ui/LoadingAlert.svelte";
  import type { PersonDetailsQueryData, PersonDetailsType } from "../../types";
  import { PERSON_DETAILS_QUERY } from "../../queries";

  // Props
  export let params: { id: string };

  // Query logic
  const personDetails = operationStore<PersonDetailsQueryData, { id: string }>(
    PERSON_DETAILS_QUERY,
    { id: params.id }
  );

  query(personDetails);

  // data variable for easy access to person data
  // $personDetails.data.person.X => data.X in the template
  let data: PersonDetailsType;
  $: data = $personDetails?.data?.person;
</script>

<svelte:head>
  {#if $personDetails.fetching}
    <title>Loading... - SWAPI Svelte</title>
  {:else if $personDetails.error}
    <title>Error - SWAPI Svelte</title>
  {:else}
    <title>{data.name} - SWAPI Svelte</title>
  {/if}
</svelte:head>
{#if $personDetails.fetching}
  <LoadingAlert />
{:else if $personDetails.error}
  <FetchError error="{$personDetails.error}" />
{:else}
  <h1>{data.name}</h1>
  <ul>
    <li>Born in: {data.birthYear}</li>
    <li>Gender: {data.gender}</li>
    <li>Height: {data.height}</li>
    <li>
      Homeworld:
      <ul>
        <li>Name: {data.homeworld.name}</li>
        <li>Population: {data.homeworld.population ?? "Unknown"}</li>
      </ul>
    </li>
    {#if data.species}
      <li>Species: {data.species.name} ({data.species.classification})</li>
    {/if}
  </ul>
{/if}
