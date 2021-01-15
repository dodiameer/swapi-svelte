<script lang="ts">
  // Imports
  import { query, operationStore, gql } from "@urql/svelte";
  import FetchError from "../ui/FetchError.svelte";
  import LoadingAlert from "../ui/LoadingAlert.svelte";
  import { pop as popRoute } from "svelte-spa-router";
  import type { PersonDetailsQueryData, PersonDetailsType } from "../../types";

  // Props
  export let params: { id: string };

  // Query logic
  const personDetails = operationStore<PersonDetailsQueryData, { id: string }>(
    gql`
      query($id: ID!) {
        person(id: $id) {
          id
          name
          birthYear
          gender
          height
          homeworld {
            name
            population
          }
          species {
            name
            classification
          }
        }
      }
    `,
    { id: params.id }
  );

  query(personDetails);

  // data variable for easy access to person data
  // $personDetails.data.person.X => data.X in the template
  let data: PersonDetailsType;
  $: data = $personDetails?.data?.person;
</script>

<button role="link" on:click={popRoute}>Go Back</button>
{#if $personDetails.fetching}
  <LoadingAlert />
{:else if $personDetails.error}
  <FetchError error={$personDetails.error} />
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
