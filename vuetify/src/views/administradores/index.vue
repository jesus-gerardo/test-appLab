<template>
    <div>
        <v-breadcrumbs :items="bread">
            <template v-slot:divider>
                <v-icon>mdi-chevron-right</v-icon>
            </template>
        </v-breadcrumbs>

        <component :is="listaPage[page].component" @page="change"></component>
    </div>
</template>

<script>
    import PageData from "./components/PageData.vue";
    import PageShow from "./components/PageShow.vue";
    import PageForm from "./components/PageForm.vue"
    export default {
        name:'Administradores',

        data () {
            return{
                page: 'main',
                listaPage:{
                    main: {
                        component: PageData
                    },
                    show: {
                        component: PageShow
                    },
                    form: {
                        component: PageForm
                    },
                },
                bread: [
                    {
                        text: 'Inicio',
                        disabled: true,
                        href: '',
                    },
                    {
                        text: this.$route.name,
                        disabled: false,
                        href: '#',
                    },
                ],
            }
        },
        methods: {
            change(page){
                console.log(page)
                this.page = page;
            }
        },
    }
</script>

<style>

</style>