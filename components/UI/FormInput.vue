<template>
  <div class="input-control">
    <label><slot /></label>
    <input
      v-if="controlType === 'input'"
      :value="value"
      v-bind="$attrs"
    >
    <textarea
      v-if="controlType === 'textarea'"
      rows="10"
      :value="value"
    />
  </div>
</template>

<script>
export default {
  props: {
    controlType: {
      type: String,
      default: 'input'
    },
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scopde>
.input-control {
 margin: 10px 0;
}
.input-control label {
  display: block;
  font-weight: bold;
}

.input-control input,
.input-control textarea {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  padding: 5px;
}

</style>
