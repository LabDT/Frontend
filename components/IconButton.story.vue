<script lang="ts" setup>
import IconButton from './IconButton.vue';
</script>

<template>
    <Story title="IconButton">
        <Variant title="default">
            <IconButton variant="ok"/>
        </Variant>
        <Variant title="Ok">
            <IconButton variant="ok" />
        </Variant>
        <Variant title="Search">
            <IconButton variant="search" />
        </Variant>
        <Variant title="Next">
            <IconButton variant="next" />
        </Variant>
    </Story>
</template>