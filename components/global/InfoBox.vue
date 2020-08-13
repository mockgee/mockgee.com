<template>
        <b-message type="is-info">
            <slot name="info-box">
              This is default message
            </slot>
        </b-message>
</template>

<script>
export default {
  name: "InfoBox",
    //   props: {
    //   message: {
    //     type: String,
    //     required: true
    //   }
    // }
}
</script>