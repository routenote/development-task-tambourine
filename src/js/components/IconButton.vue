<template> 
    <div>
      <h2>{{ name }}</h2>
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'icon-button',
    data() {
      return {
        name: 'Test',
        message: 'I like vue'
      }
    }
  };
  </script>
  
  <style></style>