<script lang="ts">
  // Imports
  import { operationStore, query } from "@urql/svelte";
  import FetchError from "../ui/FetchError.svelte";
  import LoadingAlert from "../ui/LoadingAlert.svelte";
  import { link } from "svelte-spa-router";
  import type { AllPeopleQueryData } from "../../types";
  import { ALL_PEOPLE_QUERY } from "../../queries";

  // Query logic
  let limit = 10;

  const allPeople = operationStore<
    AllPeopleQueryData,
    { limit: number; after?: string }
  >(ALL_PEOPLE_QUERY, {
    limit,
  });

  query(allPeople);
</script>

<svelte:head>
  <title>SWAPI Svelte</title>
</svelte:head>
{#if $allPeople.fetching}
  <LoadingAlert />
{:else if $allPeople.error}
  <FetchError error="{$allPeople.error}" />
{:else}
  <ul>
    {#each $allPeople.data.allPeople.people as { id, name, birthYear, homeworld: { name: homeworld } }}
      <li>
        <h1>
          <a href="/person/{id}" use:link>
            {name}
          </a>
        </h1>
        {#if birthYear !== "unknown"}
          <h2>Born in {birthYear} at {homeworld}</h2>
        {:else}
          <h2>Born at {homeworld} (Birth year unknown)</h2>
        {/if}
      </li>
    {/each}
  </ul>
{/if}
