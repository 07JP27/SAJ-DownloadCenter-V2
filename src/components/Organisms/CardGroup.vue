<template>
    <div>
    <h1>HOGEHOGE</h1>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs6 md3>
        <card></card>
        </v-flex>
        <v-flex xs6 md3>
        <card></card>
        </v-flex>
        <v-flex xs6 md3>
        <card></card>
        </v-flex>
        <v-flex xs6 md3>
        <card></card>
        </v-flex>
        <v-flex xs6 md3>
        <card></card>
        </v-flex>
        <v-flex xs6 md3>
        <card></card>
        </v-flex>
      </v-layout>
    </v-container>
    </div>
</template>

<script>
import Card from '../Molecules/Card'

export default {
  name: 'CardGroup',
  components: {
    Card
  }
}
</script>
