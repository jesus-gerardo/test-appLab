<template>
    <div>
        <v-card elevation="2" class="mt-5">
            <v-card-title primary-title>
                Horarios
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

        <v-dialog v-model="dialog" max-width="700px" persistent>
            <v-card flat>
                <v-toolbar color="primary" dark>
                    <v-card-title> Dialog </v-card-title>
                </v-toolbar>
                
                <v-card-text>
                    <v-form class="mt-5">
                        <v-row dense>
                            <v-col cols="6">
                                <v-select
                                    dense
                                    v-model="form.salon"
                                    :items="classroom"
                                    label="Aulas"
                                    item-text="clave"
                                    item-value="id"
                                ></v-select>
                            </v-col>
                            <v-col cols="6">
                                <v-select
                                    dense
                                    v-model="form.teacher"
                                    :items="teachers"
                                    label="Maestro"
                                    item-text="full_name"
                                    item-value="id"
                                ></v-select>
                            </v-col>
                        </v-row>

                        <!-- <v-row dense>
                            <v-text-field
                                dense
                                label="Título"
                                type="time"
                                min="10:00"
                                v-model="prueba"
                            ></v-text-field>
                        </v-row> -->

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
    import {mapActions, mapState} from "vuex"
    export default {
        name:'Horarios',
        data () {
            return {
                count: 0,
                loading: true,
                rows: [],
                options: {},
                headers: [
                    { text: 'Salon', value:'salon.clave' },
                    { text: 'Opciones', value: 'action', sortable: false },
                ],
                prueba: null,
                dialog: false,
                action: false,
                form: {
                    salon: null,
                    teacher: null
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
        },beforeMount(){
            this.getClassroom();
            this.getTeachers();
        }, computed:{
            ...mapState({  
                classroom: state => state.classroom,
                teachers: state => state.teachers,
                days: state => state.days,
            }),
        }, methods: {
            ...mapActions([
                'getClassroom', 'getTeachers'
            ]),
            async getDataFromApi () {
                try{
                    this.loading = true
                    const {page, itemsPerPage } = this.options
                    let {data} = await this.$axios.get(`/materias/horarios/${this.$route.params.id}?query={}&limit=${itemsPerPage}&page=${page}`);
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
            }
        },
    }
</script>

<style>

</style>