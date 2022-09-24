<template>
  <div
      :id="id"
      class="board"
      @dragover.prevent
      @drop.prevent="drop"
  >
    <slot/>
  </div>
</template>

<script>
export default {
  name: "BoardComponent",
  props: ['id'],
  methods: {
    drop(e) {
      const cardID = e.dataTransfer.getData('cardID')
      const card = document.getElementById(cardID)
      // card.style.display = 'block'
      e.target.appendChild(card)
      e.target.style.border = 'none'
      this.$emit('addItem', e, cardID)
    }
  }
}
</script>

<style scoped>

</style>
