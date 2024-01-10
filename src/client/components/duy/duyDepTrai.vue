<template>
    <div class="px-[80px]">
        <div>
            <DuyMyGame></DuyMyGame>
            <UiFlex justify="between" class="py-[10px]">
                <DuyGame v-for="(game, index) in games1" :img="game.url" :key="index"></DuyGame>
            </UiFlex>
        </div>

        <div>
            <DuyRecommen></DuyRecommen>
            <UiFlex class="w-full">
                <DuyGame1Recommen></DuyGame1Recommen>
                <UiFlex justify="around" class="w-full justify-evenly">
                    <DuyGame2Recommen v-for="(game, index) in games" :img="game.url" :key="index"></DuyGame2Recommen>
                </UiFlex>
            </UiFlex>
        </div>
    </div>
</template>

<script setup>
    const games1 = ref([
        {url: 'https://i.ytimg.com/vi/QkoY6GV62X4/maxresdefault.jpg'},
        {url: 'https://pbs.twimg.com/media/Er3k85DVgAIXphJ.jpg:large'},
        {url: 'https://t1.blockdit.com/photos/2022/08/630de42c7816417133718a49_800x0xcover__0M1tmJK.jpg'}
    ])

    const games = ref([
        {url:'https://gamek.mediacdn.vn/133514250583805952/2020/6/4/-1591253249203679369585.jpg'},
        {url:'https://i0.wp.com/areatopik.com/wp-content/uploads/2022/08/Sosok-Eimi-Fukada.jpg?fit=1533%2C1533&ssl=1'},
        {url:'https://we25.vn/media2018/Img_News/2023/02/23/2_20230223163204.jpg'}
    ])

</script>