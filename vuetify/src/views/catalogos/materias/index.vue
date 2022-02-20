<template>
    <div>
        <v-card elevation="2" class="mt-5">
            <v-card-title primary-title>
                Asignaturas
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

                    <template v-slot:[`item.action`]="{ item }">
                        <v-menu bottom :close-on-click="true">
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn dark icon v-bind="attrs" v-on="on">
                                    <v-icon color="grey" v-on="on">
                                        mdi-dots-vertical
                                    </v-icon>
                                </v-btn>
                            </template>

                            <v-list>

                                <v-list-item @click="redi(item)">
                                    <v-list-item-title>
                                        <v-icon color="success"> mdi-calendar-clock </v-icon>
                                            horarios
                                    </v-list-item-title>
                                </v-list-item>

                                <v-list-item @click="open(item)">
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

        <v-dialog v-model="dialog" max-width="500px" persistent>
            <v-card flat>
                <v-toolbar color="primary" dark>
                    <v-card-title> Dialog </v-card-title>
                </v-toolbar>
                
                <v-card-text>
                    <v-form class="mt-5">
                        <v-row dense>
                            <v-col cols="12">
                                <v-text-field
                                    label="Nombre"
                                    v-model="form.nombre"
                                    dense
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12">
                                <v-text-field
                                    label="Descripcion"
                                    v-model="form.descripcion"
                                    dense
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12">
                                <v-text-field
                                    label="Creditos"
                                    v-model="form.creditos"
                                    dense
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="red" @click="close" dark>Cancel</v-btn>
                    <v-btn color="success" v-on="{click: action ? updated : store }">Acept</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    
    </div>
</template>

<script>
    export default {
        name:'Materias',
        data () {
            return {
                count: 0,
                loading: true,
                rows: [],
                options: {},
                headers: [
                    { text: 'Materia', value:'nombre' },
                    { text: 'Descripcion', value: 'descripcion' },
                    { text: 'Creditos', value: 'creditos'},
                    { text: 'Estado', value: 'estado', sortable: false },
                    { text: 'Opciones', value: 'action', sortable: false },
                ],
                dialog: false,
                action: false,
                form: {
                    nombre: null,
                    descripcion: null,
                    creditos: null
                }
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
                    this.loading = true
                    const {page, itemsPerPage } = this.options
                    let {data} = await this.$axios.get(`/catalogo/materias?query={}&limit=${itemsPerPage}&page=${page}`);
                    this.rows = data.data;
                    this.count = data.count;
                    this.loading = false;
                }catch(exception){
                    this.loading = false;
                    console.error(exception);
                }

            },
            open(row = null){
                this.action = false;
                if(row != null){
                    this.form = Object.assign({}, row);
                    this.action = true;
                }
                this.dialog = true;
            },
            close(){
                for(let key in this.form){
                    this.form[key] = null;
                }
                this.dialog = false;
            },
            async store(){
                try{
                    let form = new FormData();
                    for(let key in this.form){
                        form.append(key, this.form[key]);
                    }
                    let {data} = await this.$axios.post('/catalogo/materias', form);
                    if(!data.response){
                        return;
                    }
                    this.close();
                    this.getDataFromApi();
                }catch(exception){
                    console.log(exception)
                }
            },
            async updated(){
                try{
                    let {data} = await this.$axios.put(`/catalogo/materias/${this.form.id}`, this.form);
                    if(!data.response){
                        return;
                    }
                    this.close();
                    this.getDataFromApi();
                }catch(exception){
                    console.log(exception)
                }
            },
            async remove(row){
                try{
                    console.log(row)
                }catch(exception){
                    console.log(exception)
                }
            },
            redi(row){
                this.$router.push({name: 'horarioMateria', params:{id: row.id}});
            }
        },
    }
</script>

<style>

</style>