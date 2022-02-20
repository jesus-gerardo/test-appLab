<template>
    <div>
        <v-card elevation="2" class="mt-5">
            <v-card-title primary-title>
                Alumnos
                <v-spacer></v-spacer>
                <v-btn color="success" icon rounded @click="open()">
                    <v-icon >mdi-plus</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text>
                <v-data-table
                    calculate-widths
                    fixed-header
                    :headers="headers"
                    :items="rows"
                    :options.sync="options"
                    :server-items-length="count"
                    :loading="loading"
                    flat
                >
                    <template v-slot:[`item.estado`]="{item}">
                        <v-chip :color="item.active == 1 ? 'success': 'error'">{{item.active == 1 ? 'Activo': 'Inactivo'}}</v-chip>
                    </template>

                    <template v-slot:[`item.action`]="{item}">
                        <v-menu bottom :close-on-click="true">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                    <v-icon color="grey" v-on="on">
                                        mdi-dots-vertical
                                    </v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item @click="expediente(item)">
                                    <v-list-item-title>
                                        <v-icon color="blue"> mdi-pen </v-icon>
                                        Editar
                                    </v-list-item-title>
                                </v-list-item>

                                <v-list-item @click="remove(item)">
                                    <v-list-item-title>
                                        <v-icon color="red"> mdi-trash-can </v-icon>
                                        Eliminar
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </template>
                </v-data-table>
            </v-card-text>
        </v-card>

        <DialogExpedientes
            v-if="dialog"
            :dialog="dialog"
        />
    </div>
</template>

<script>
    import DialogExpedientes from "./components/DialogExpedientes.vue";
    export default {
        name:'Alumnos',
        components: {
            DialogExpedientes
        }, data () {
            return {
                dialog: false,
                loading: true,
                count: 0,
                rows: [],
                options: {},
                headers: [
                    { text: 'Picture', value:'image' },
                    { text: 'Matricula', value: 'matricula' },
                    { text: 'Nombre', value: 'full_name' },
                    { text: 'Estado', value: 'estado', sortable: false },
                    { text: 'Opciones', value: 'action', sortable: false }
                ]
            }
        },
        watch: {
            options: {
                handler () {
                    this.getDataFromApi()
                },
                deep: true,
            },
        },
        methods: {
            async getDataFromApi () {
                try{
                    this.loading = true;
                    const {page, itemsPerPage } = this.options;
                    let {data} = await this.$axios.get(`/expediente?type=alumno&query={}&limit=${itemsPerPage}&page=${page}`);
                    this.rows = data.data;
                    this.count = data.count;
                    this.loading = false;
                }catch(exception){
                    this.loading = false;
                    console.error(exception);
                }
            },
            open(){
                this.dialog = true;
            },
            expediente(row){
                try{
                    this.$router.push({name: 'expedienteAlumno', params:{id: row.id}});
                }catch(exception){
                    console.error(exception);
                }
            },
            close(){
                for(let key in this.form){
                    this.form[key] = null;
                }
            },
            async remove(row){
                try{
                    console.log(row);
                }catch(exception){
                    console.log(exception);
                }
            }
        },
    }
</script>

<style>

</style>