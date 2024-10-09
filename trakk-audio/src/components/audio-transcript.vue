<template>
  <div>
    <b-button @click="transcribeAudio" variant="success"
      >Transcribe Audio</b-button
    >
    <p v-if="transcription">Transcription: {{ transcription }}</p>
  </div>
</template>

<script>
export default {
  name: "AudioTranscript",
  props: {
    audioBlob: Blob,
  },
  data() {
    return {
      transcription: "",
    };
  },
  methods: {
    async transcribeAudio() {
      if (!this.audioBlob) {
        alert("No audio to transcribe!");
        return;
      }
      // Add logic to send audioBlob to your transcription service
      // For example, set this.transcription to the response from the API
    },
  },
};
</script>

<style scoped>
/* Add any styles needed here */
</style>
