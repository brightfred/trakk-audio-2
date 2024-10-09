<template>
  <div>
    <b-button @click="startRecording" variant="primary"
      >Start Recording</b-button
    >
    <b-button @click="stopRecording" variant="danger" :disabled="!isRecording"
      >Stop Recording</b-button
    >
    <p v-if="isRecording">Recording...</p>
  </div>
</template>

<script>
export default {
  name: "AudioRecorder",
  data() {
    return {
      isRecording: false,
      mediaRecorder: null,
      audioChunks: [],
    };
  },
  methods: {
    async startRecording() {
      this.isRecording = true;
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.start();

      this.mediaRecorder.ondataavailable = (event) => {
        this.audioChunks.push(event.data);
      };
    },
    stopRecording() {
      this.isRecording = false;
      this.mediaRecorder.stop();
      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: "audio/wav" });
        this.$emit("audioRecorded", audioBlob);
        this.audioChunks = [];
      };
    },
  },
};
</script>

<style scoped>
/* Add any styles needed here */
</style>
