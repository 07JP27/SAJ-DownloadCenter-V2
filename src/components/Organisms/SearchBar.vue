<template>
  <v-layout row wrap>
        <v-flex xs12 sm9 md9>
          <v-text-field label="Solo" placeholder="検索" solo></v-text-field>
        </v-flex>
        <v-flex sm1 md1></v-flex>
        <v-flex xs3 sm1 md1>
          <img src="../../assets/icon/th-solid.svg" class="icon-button" />
        </v-flex>
        <v-flex xs3 sm1 md1>
          <img src="../../assets/icon/list-solid.svg" class="icon-button" />
        </v-flex>
      </v-layout>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.icon-button{
  height: 3rem;
}
</style>
