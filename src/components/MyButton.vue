<template>
  <div   class="flex space-x-2 ">
    <button  @click="$emit('click')" disabled :class="computedClass" class="button-wrapper">
      <img
        v-show="leftIcon"
        class="icon inline absolute top-0 left-0 bottom-0 right-0 m-auto ml-3"
        style="height: 25px"
        :src="tick"
      />
      <span v-if="isLoading" class="btn--loading transition"> </span>
      <span v-else>{{label}}</span>
      <img
        v-show="rightIcon"
        class="icon inline absolute top-0 right-0 bottom-0 left-0 m-auto mr-3"
        style="height: 25px"
        :src="tick"
        alt="hello"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "MyButton",
  props: {
    title: String,
    toggle: Boolean,
    isLoading: {
      type: Boolean,
      default:false,
    },
    leftIcon: {
      type: Boolean,
      default: false,
    },
    rightIcon: {
      type: Boolean,
      default: false,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    secondary: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    shadow: {
      type: Boolean,
      default: false,
    },
    label:{
    type:String,
    default:''
    }
  },
  data() {
    return {
      tick: require("@/assets/tick.svg"),
    };
  },
  methods: {
    changeloader() {},
  },
  computed: {
    computedClass() {
      return [
         {primary: this.primary },
         {secondary: this.secondary},
         {rounded:this.rounded},
         {disabled:this.disabled},
         {shadow:this.shadow}
    ];
    },
  },
};
</script>

<style lang="scss" scoped>
.button-wrapper {
    
  @apply btn h-10  relative inline-block px-28 py-3 font-normal bg-blue-600 text-white text-sm leading-tight  uppercase hover:bg-blue-700  active:bg-blue-800 active:shadow-lg focus:bg-blue-900 focus:outline-none focus:ring focus:ring-blue-500;

  &.primary {
    background: color blue -600px;;
    &.shadow{
        box-shadow:2px 3px 1px  blue;
    }
    &:hover {
      background:color blue -700px;
    }
    &:active{
        box-shadow:none;
    }
    .icon {
      filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(7473%)
        hue-rotate(214deg) brightness(92%) contrast(107%);
    }
    
  }

  &.secondary {
    background-color: green;
    &:hover {
      background-color: yellow;
    }
  }
  &.disabled{
    background-color: rgb(211, 207, 207);
    color: rgb(161, 159, 159);
    cursor:none;
    
  }
  &.rounded{
        border-radius:10px;
    }
}

.btn {
  position: relative;
}
.btn--loading::after {
  content: "";
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  border: 5px solid transparent;
  border-top-color: white;
  border-radius: 50%;
  animation: btn-loading-spinner 1s ease infinite;
}


@keyframes btn-loading-spinner {
  from {
    transform: rotate(0turn);
  }
  to {
    transform: rotate(2turn);
  }
}
</style>
