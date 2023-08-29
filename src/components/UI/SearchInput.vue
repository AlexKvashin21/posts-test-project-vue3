<template>
  <div class="search-input">
      <div class="search-input__icon">
          <i class="icon pi pi-search"></i>
      </div>
      <input
              class="search-input__field"
              type="text" :value="inputValue" :placeholder="placeholder"
              @input="$emit('update:inputValue', $event.target.value)">
  </div>
</template>

<script>
import 'primeicons/primeicons.css';
export default {
  name: 'SearchInput',
    props: {
      inputValue: {
          type: String,
          required: true
      },
      placeholder: {
          type: String,
          required: false,
          default: ''
      }
    }
}
</script>

<style scoped lang="scss">

.search-input {
  margin: 0 auto;
  height: 39px;
  max-width: 300px;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 0px 5px 5px 0px;

  &__icon {
    padding: 10px;
    border-right: 1px solid #a6a2a2;
  }

  &__field {
    height: 100%;
    width: 100%;
    border-radius: 0px 5px 5px 0px;
    padding-left: 5px;

    &:focus {
      outline: none;
      -moz-box-shadow: 0px 0px 0px 2px #0f81fa;
      -webkit-box-shadow: 0px 0px 0px 2px #0f81fa;
      box-shadow: 0px 0px 0px 2px #0f81fa;
    }
  }

  border: 1px solid #a6a2a2;
}

</style>
