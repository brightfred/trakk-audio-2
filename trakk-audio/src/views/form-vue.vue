<template>
  <div class="container mt-4">
    <h2>Complete Your Information</h2>

    <b-form @submit.prevent="handleSubmit">
      <!-- Name Field -->
      <b-form-group label="Name" label-for="name-input">
        <b-form-input
          id="name-input"
          v-model="formData.name"
          placeholder="Enter your name"
          required
        ></b-form-input>
      </b-form-group>

      <!-- Email Field -->
      <b-form-group label="Email" label-for="email-input">
        <b-form-input
          id="email-input"
          v-model="formData.email"
          type="email"
          placeholder="Enter your email"
          required
        ></b-form-input>
      </b-form-group>

      <!-- Date Picker -->
      <b-form-group label="Date of Birth" label-for="dob-input">
        <b-form-datepicker
          id="dob-input"
          v-model="formData.dob"
          placeholder="Select a date"
        ></b-form-datepicker>
      </b-form-group>

      <!-- Dropdown Menu -->
      <b-form-group label="Country" label-for="country-select">
        <b-form-select
          id="country-select"
          v-model="formData.country"
          :options="countryOptions"
          required
        ></b-form-select>
      </b-form-group>

      <!-- Text Area -->
      <b-form-group label="About Yourself" label-for="about-textarea">
        <b-form-textarea
          id="about-textarea"
          v-model="formData.about"
          placeholder="Tell us about yourself"
          rows="3"
        ></b-form-textarea>
      </b-form-group>

      <!-- Checkbox -->
      <b-form-group>
        <b-form-checkbox v-model="formData.terms">
          I agree to the terms and conditions
        </b-form-checkbox>
      </b-form-group>

      <!-- Record Button Component -->
      <record-btn @audioProcessed="processAudioData"></record-btn>

      <!-- Submit Button -->
      <b-button type="submit" variant="primary" class="mt-3">Submit</b-button>
    </b-form>
  </div>
</template>

<script>
import RecordBtn from "../components/record-btn.vue";

export default {
  name: "FormVue",
  components: {
    RecordBtn,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        dob: "",
        country: "",
        about: "",
        terms: false,
      },
      countryOptions: [
        { value: null, text: "Select your country" },
        { value: "NZ", text: "New Zealand" },
        { value: "AU", text: "Australia" },
        { value: "US", text: "United States" },
        // Add more options as needed
      ],
    };
  },
  methods: {
    handleSubmit() {
      alert("Form submitted successfully!");
      // Handle the form submission logic
    },
    processAudioData(data) {
      // Process the audio transcription and fill in the form fields
      // Example:
      this.formData.name = data.name || this.formData.name;
      this.formData.email = data.email || this.formData.email;
      this.formData.about = data.about || this.formData.about;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
}
</style>
