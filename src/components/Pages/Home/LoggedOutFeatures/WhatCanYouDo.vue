<template>
  <div>
    <v-row><v-col>
      <h1 class="text-center">What can you do with WbStack?</h1>
    </v-col></v-row>
    <v-row><v-col>
      <p class="text-center">WbStack allows you to easily curate data in your own Wikibase instance, without worrying about the technical side of things.</p>
    </v-col></v-row>
    <v-row>
      <v-col>
        <!-- START blocks side by side -->
          <v-row align="start" justify="space-between">
            <v-col cols="3">
              <v-card>
                <v-card-title><h3>Create a Wikibase</h3></v-card-title>
                <v-card-text>
                Get set up in under a minute, with no technical knowledge, get automatic upgrades and much more.
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title><h3>Build a community</h3></v-card-title>
                <v-card-text>Allow people to find your data, in the standard Wikibase format, and help you curate it.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title><h3>Link to other data</h3></v-card-title>
                <v-card-text>Link to other open data sets and become part of the <a target="_blank" rel="noopener noreferrer" href="https://lod-cloud.net/">Linked Open Data Cloud</a>.</v-card-text>
              </v-card>
            </v-col>
            <v-col cols="3">
              <v-card>
                <v-card-title><h3>Query everything</h3></v-card-title>
                <v-card-text>Data and input managed by <a target="_blank" rel="noopener noreferrer" href="https://www.mediawiki.org/wiki/MediaWiki" >MediaWiki</a>, Triples and querying handled in <a target="_blank" rel="noopener noreferrer" href="https://www.wikidata.org/wiki/Wikidata:SPARQL_tutorial" >SPARQL</a> via Blazegraph.</v-card-text>
              </v-card>
            </v-col>
          </v-row>
        <!-- END blocks side by side -->
      </v-col>
      <!-- TODO uncomment below when registration is allowed -->
      <!--
      <v-flex>
        <p>Getting started is easy</p>
      </v-flex>
      <v-flex>
        <v-btn color="primary" to="/create-account">Sign up for free</v-btn>
      </v-flex>
    -->
    </v-row>
  </div>
</template>

<script>

export default {
  name: 'WhatCanYouDo',
  components: {}
}
</script>

<style scoped>

h1 {
  margin-bottom: 16px;
}
</style>
