<template>
  <v-footer dark height="auto">
    <v-card class="flex" flat tile>
      <v-card-title class="scoutGreen">
        <v-layout align-center justify-space-around row fill-height>
            <img class="footer-logo" src="../../assets/footer-logo.svg" width="40%" />
        </v-layout>
      </v-card-title>

      <v-card-actions class="darkScoutGreen">
          <p>&copy;2018 — Scout Association of Japan</p>
          <v-spacer></v-spacer>
          <p>ボーイスカウト日本連盟事務局 社会連携・広報部</p>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<style>
.scoutGreen{
    background-color: #115740;
}
.darkScoutGreen{
    background-color: #0B3C2C;
}
</style>
