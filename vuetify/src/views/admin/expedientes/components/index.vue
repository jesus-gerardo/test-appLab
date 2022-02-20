<template>
    <div>
        <v-card elevation="2" class="mt-5">
            <v-card-title primary-title>
                Expediente
            </v-card-title>

            <v-card-text></v-card-text>
        </v-card>
    </div>
</template>

<script>
    export default {
        name: 'Expedientes',
        data(){
            return{
                rows: [],
            }
        }, watch: {
            options: {
                handler () {
                    this.getDataFromApi()
                },
                deep: true,
            },
        }, methods: {
            async getDataFromApi () {
                try{
                    let {data} = await this.$axios.get(`/expediente/search/${this.$route.params.id}`);
                    this.rows = data;
                }catch(exception){
                    console.error(exception);
                }
            },
        },
    }
</script>
