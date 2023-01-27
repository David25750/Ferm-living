<script>
export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      default: '#FFFFFF',
    },
  },
};
</script>
<template>
    <button class="button" :class="['button', `-color-${color}`]">
            <slot></slot>
        </button>
</template>
<style lang="scss" scoped>

.button{
        border:none;
        width: 250px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-family: $Content;
        font-size: $sizecontent;
        &.-color-grey{
          color: $grey;
          background-color: $darkgrey;
          &.-color-grey:hover{
            background-color: $brown;                
          }
          &.-color-grey:active{
            background-color: $darkgrey;
          }
        }
        &.-color-brown{
          color: $brown;
          background-color: $grey;
          &.-color-brown:hover{
            color: $grey;
          background-color: $brown;                
          }
          &.-color-brown:active{
            background-color: $grey;
          }
        }
        &.-color-white{
          color: $darkgrey;
          background-color: transparent;
          &.-color-white:hover{
            border: 3px solid;
            border-color: $darkgrey;
          }
          &.-color-white:active{
            border: 3px solid;
            border-color: $darkgrey;
            color: $grey;
          background-color: $darkgrey;
          }
        }
      }

</style>