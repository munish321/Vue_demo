<template>
  <div class="container">
    <div :class="computedClass"  class="wrapper">
        <div    >
        <header @mousedown="dragMouseDown">
          <slot name="header"></slot>
        </header>
        <main>
          <slot name="content"></slot>
        </main>
        <footer>
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModelVue",
  data() {
    return {
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0,
      },
    };
  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault();
      // get the mouse cursor position at startup:
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      document.onmousemove = this.elementDrag;
      document.onmouseup = this.closeDragElement;
    },
    elementDrag: function (event) {
      event.preventDefault();
      this.positions.movementX = this.positions.clientX - event.clientX;
      this.positions.movementY = this.positions.clientY - event.clientY;
      this.positions.clientX = event.clientX;
      this.positions.clientY = event.clientY;
      console.dir(this.positions.movementX);
      // set the element's new position:
      this.$refs.head.style.top =
        this.$refs.head.offsetTop - this.positions.movementY + "px";
      this.$refs.head.style.left =
        this.$refs.head.offsetLeft - this.positions.movementX + "px";
    },
    closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    },
  },
  props: {
    large: {
      type: Boolean,
      default: false,
    },
    small: {
      type: Boolean,
      default: false,
    },
    medium: {
      type: Boolean,
      default: false,
    },
    default: {
      type: Boolean,
      default:true,
    },
  },
  computed:{
    computedClass() {
    return [
      { large: this.large },
      { small: this.small },
      { medium: this.medium },
      { default: this.default },
    ];
  },
  }
 
};
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  right: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: hidden; /* Enable scroll if needed */
  //   background-color: rgb(5, 5, 5); /* Fallback color */
  background-color: rgba(168, 164, 164, 0.6); /* Black w/ opacity */

  header {
    z-index: 0;
    position: relative;
    width: 100%;
    border-radius: 6px;
    text-align: center;
    height: 60px;
    background-color: #227c70;
    border-radius: 6px 6px 0 0;
    cursor: move;
    cursor: grab;

    header:active {
      cursor: grabbing;
    }
  }
  main {
    width: 100%;
    height: 300px;
    background-color: white;
    overflow-y: scroll;
  }
  main::-webkit-scrollbar {
    display: none;
  }

  footer {
    width:100%;
    height: 60px;
    background-color: #227c70;
    border-radius: 0 0 6px 6px;
  }
  .wrapper {
    position: relative;
    border-radius: 6px;
    margin: 15% auto; /* 15% from the top and centered */
    box-shadow: 2px 4px 6px grey;
    

    
        width:400px;
            &.default{
        width:400px;
     }

    
      &.medium {
        width: 700px;
      }
      &.large{
        width:1000px
      }
      &.small{
        width:500px
      }
    }
     
    }


</style>
