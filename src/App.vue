<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import content from './components/AccountForm.vue'

// const props = defineProps({
//     account: {
//         type: Object,
//         required: true,
//     },
// });

// // const emit = defineEmits(['delete', 'update']);

// const localAccount = reactive({
//     id: props.account.id,
//     label: props.account.label,
//     labelString: props.account.label.map(l => l.text).join(';'),
//     type: props.account.type,
//     login: props.account.login,
//     password: props.account.password,
// });


</script>

<template>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header> -->

  <main>
    <!-- <TheWelcome /> -->
    <!-- <account-form /> -->

    <content></content>


  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
