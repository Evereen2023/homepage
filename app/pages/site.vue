<script setup lang="ts">
import type { CardProps } from '~/components/partial/Card.vue'

useHead({ title: '站点' })
definePageMeta({ headerText: '一些网站' })

// TODO: 更改组织门户
const orgSites: Array<CardProps> = [
    {
        name: '谧林&thinsp;工作室',
        nameAlt: 'Nemophilists Studio',
        buttons: [
            { icon: 'ph:planet-duotone', text: '访问', to: 'https://nemophilists.com/' },
        ],
        desc: '一个破工作室',
    },

]
</script>

<template>
    <ZTitle>组织门户</ZTitle>
    <ZCardList :data-list="orgSites" />
</template>

<style lang="scss" scoped>
</style>
