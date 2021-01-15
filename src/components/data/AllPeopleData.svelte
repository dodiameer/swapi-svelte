<script lang="ts">
  import { operationStore, query, gql } from "@urql/svelte";
  import FetchError from "../ui/FetchError.svelte";
  import LoadingAlert from "../ui/LoadingAlert.svelte";
  import { link } from "svelte-spa-router";
  import type { AllPeopleQueryData } from "../../types";

  let limit = 10;

  const allPeople = operationStore<
    AllPeopleQueryData,
    { limit: number; after?: string }
  >(
    gql`
      query AllPeople($limit: Int!, $after: String) {
        allPeople(first: $limit, after: $after) {
          people {
            id
            name
            birthYear
            homeworld {
              name
            }
          }
        }
      }
    `,
    {
      limit,
    }
  );

  query(allPeople);
</script>

{#if $allPeople.fetching}
  <LoadingAlert />
{:else if $allPeople.error}
  <FetchError error={$allPeople.error} />
{:else}
  <ul>
    {#each $allPeople.data.allPeople.people as { id, name, birthYear, homeworld: { name: homeworld } }}
      <li>
        <h1>
          <a href="/person/{id}" use:link>
            {name}
          </a>
        </h1>
        <h2>Born in {birthYear} at {homeworld}</h2>
      </li>
    {/each}
  </ul>
{/if}
