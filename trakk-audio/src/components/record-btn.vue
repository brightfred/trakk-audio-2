<template>
  <div>
    <AudioRecorder @audioRecorded="handleAudioRecorded" />
    <AudioTranscript :audioBlob="audioBlob" />
  </div>
</template>

<script>
import AudioRecorder from "./audio-recorder.vue";
import AudioTranscript from "./audio-transcript.vue";

export default {
  name: "RecordBtn",
  components: {
    AudioRecorder,
    AudioTranscript,
  },
  data() {
    return {
      audioBlob: null,
    };
  },
  methods: {
    handleAudioRecorded(blob) {
      this.audioBlob = blob;
    },
  },
};
</script>

<style scoped>
/* Add any styles needed here */
</style>
