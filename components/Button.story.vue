<script lang="ts" setup>
import Button from './Button.vue';
</script>

<template>
    <Story title="Button">
        <Variant title="default">
            <Button label="Button"/>
        </Variant>
        <Variant title="Big">
            <Button label="Button" variant="big"/>
        </Variant>
        <Variant title="Header">
            <Button label="Button" variant="header"/>
        </Variant>
    </Story>
</template>