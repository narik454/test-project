<template>
  <div
      :id="id"
      class="card"
      :draggable="draggable"
      @dragstart="dragStart"
      @dragover.stop
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: ['id', 'draggable'],
  methods: {
    dragStart(e) {
      const target = e.target
      e.dataTransfer.dropEffect = 'move'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('cardID', target.id)
      target.classList.remove('draggable-item-correct', 'draggable-item-incorrect')
      // setTimeout(() => {
      //   target.style.display = 'none'
      // }, 0)
    }
  }
}
</script>

<style scoped lang="scss">

div:active {
  cursor: grabbing;
  border-left: 2px solid #0C6ED6;
}

</style>
