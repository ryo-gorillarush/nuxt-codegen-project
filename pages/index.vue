<script setup lang="ts">
import { graphql } from "@/gql";
const query = gql`
  query GetAllSongs {
    songs {
      id
      title
      length
      mp3
      artist {
        name
        nationality
        description {
          html
        }
      }
      genres {
        id
        title
      }
    }
  }
`;

const { data } = await useAsyncQuery(graphql(query));
</script>

<template>
  <div>
    <p class="text-3xl p-5">ALL Songs</p>
    <div class="flex flex-wrap gap-5 p-5">
      <div
        v-for="song in data?.songs"
        class="bg-gray-600 flex flex-col rounded-lg p-3 min-w-[200px]"
      >
        <p>
          Title: <span>{{ song.title }}</span>
        </p>
        <div class="bg-green-200 text-black rounded-lg p-2 my-2">
          <p class="text-lg">Artist Info</p>
          <p>
            Name: <span class="font-semibold">{{ song.artist?.name }}</span>
          </p>
          <p>
            Nationality:
            <span class="font-semibold">{{ song.artist?.nationality }}</span>
          </p>
        </div>
        <p>Genres</p>
        <div
          v-for="genre in song?.genres"
          class="bg-blue-200 text-black rounded-lg p-2 my-2"
        >
          <p>{{ genre.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
