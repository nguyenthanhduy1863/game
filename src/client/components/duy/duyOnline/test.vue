<template>
    <UiFlex type="col">
        <UiFlex type="col" items="start" class="mb-6 bg-primary-1200 px-2 py-5 border border-primary-950 rounded-[15px]">
            <DuyDuyOnlineFriendOnl></DuyDuyOnlineFriendOnl>
            <UiFlex type="col">
                <DuyDuyOnlinePeople v-for="(people, index) in peoples" :name="people.name" :game="people.game" :img="people.url"></DuyDuyOnlinePeople>
            </UiFlex>
        </UiFlex>

        <UiFlex type="col" items="start" class="bg-primary-1200 px-2 py-5 border border-primary-950 rounded-[15px]">
            <DuyDuyOnlineFriendOnl></DuyDuyOnlineFriendOnl>
            <UiFlex type="col">
                <DuyDuyOnlinePeople v-for="(people, index) in peoples" :name="people.name" :game="people.game" :img="people.url"></DuyDuyOnlinePeople>
            </UiFlex>
        </UiFlex>
    </UiFlex>
</template>

<script setup>
    // const peoples = ref([1,2,3,4,5])

    const peoples = ref([
        {name: 'Duy', game: '69', url: 'https://i.ytimg.com/vi/QkoY6GV62X4/maxresdefault.jpg'},
        {name: 'Đức', game: 'Doggy', url: 'https://laodongxuatkhau.vn/images/2017/09/20/thanh-nu-jav-khieu-khich.jpg'},
        {name: 'Lâm', game: 'Original', url: 'https://xuatkhaulaodong.com.vn/images/2018/01/29/Shion%20Utsunomiya-thanh-nu-moi-noi-cua-nhat-ban-3%20(1).jpg'},
        {name: 'Lol', game: 'LaHan', url: 'https://image.lag.vn/upload/news/20/02/12/photo-1-15814751888351978213259_VPDD.jpg'},
        {name: 'Cak', game: '96', url: 'https://cdn.eva.vn/upload/4-2021/images/2021-10-21/new-project-475-1634809579-27-width800height700.jpg'}
    ])
</script>