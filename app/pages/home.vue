<script setup lang="ts">
useHead({ title: '' })
definePageMeta({
    alias: ['/'],
    title: '主页',
})
const appConfig = useAppConfig()
</script>

<template>
    <ZhiluAvatar class="avatar" />
    <div class="wrapper">
        <ZField label="<span style='font-size: 3rem;'>👋</span>">
            <h1 style="font-size: 3rem;">
                你好，<br>我是<mark>{{ appConfig.author.name }}</mark>
            </h1>
            <p class="desc">
                {{ appConfig.subtitle }}
            </p>
            <div>
                <!-- TODO: 修改成实际博客链接 -->
                <ZButton icon="ph:files-duotone" to="https://eees.blog/" primary>
                    博客
                </ZButton>
                <ZButton icon="ph:github-logo-duotone" to="https://github.com/Evereen2023">
                    GitHub
                </ZButton>
            </div>
        </ZField>

        <ZField label="介绍">
            <p>
                <ZLink to="https://nemophilists.com/">谧林&thinsp;工作室</ZLink>成员
            </p>
        </ZField>

        <ZField label="近期活动">
            <p>
                2024年12月与<ZLink to="https://www.zhilu.cyou/">纸鹿</Zlink>共同创建并完善<ZLink to="https://eees.blog/">唤青映记</ZLink>与我的<ZLink to="https://eseir.com/">个人主页</ZLink>。
            </p>
        </ZField>

        <ZField label="关于主页">
            <p>
                自2024年12月8日开始创建，目前缓慢修缮中。
            </p>
            <p>
                主页源码来自<ZLink to="https://github.com/L33Z22L11/homepage-v5" icon="ph:github-logo-duotone">homepage-v5</ZLink>。
            </p>
        </ZField>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    position: fixed;
    opacity: 0.2;
    top: 0;
    right: 20vw;
    margin-right: -0.4em;
    font-size: min(100vw, 60vh);
    z-index: -1;
}

.desc {
    margin: 1rem 0;
    font-size: 1.5rem;
    color: var(--c-text-2);
}
</style>
