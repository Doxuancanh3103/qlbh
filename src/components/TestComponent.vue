<template>
  <div>
    <Button>
      Ant Button
    </Button>
    <DatePicker></DatePicker>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';
import {TimePicker} from 'ant-design-vue';
import {DatePicker} from 'ant-design-vue';
export default {
  name: "TestComponent",
  components:{
    Button,
    TimePicker,
    DatePicker
  }
}
</script>

<style scoped>

</style>
