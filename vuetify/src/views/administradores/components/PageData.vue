<template>
    <v-card flat dense>
        <v-card-title primary-title>
            Administradores de la consola
        </v-card-title>

        <v-toolbar flat dense>
            <v-text-field
                label="Buscar"
                v-model="search"
                outlined
                dense
                class="mt-7 mr-2"
                prepend-inner-icon="mdi-magnify"
            ></v-text-field>
            <v-btn class="text-caption mr-2" @click="getDataFromApi()"> Buscar</v-btn>
            <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="300"
                offset-y
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn color="success" v-bind="attrs" v-on="on" class="mr-2">
                        <v-icon >mdi-filter-outline</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title primary-title class="text-overline">
                        Filtros de búsqueda
                    </v-card-title>

                    <v-card-text>
                        <v-row dense>
                            <v-col cols="12">
                                <v-select
                                    :items="areas"
                                    label="Áreas"
                                    outlined
                                    dense
                                    item-value="id"
                                    item-text="nombre"
                                    v-model="query.area"
                                ></v-select>
                            </v-col>
                        </v-row>

                        <v-row dense>
                            <v-col cols="12">
                                <v-select
                                    :items="estatus"
                                    label="Estatus"
                                    outlined
                                    dense
                                    item-value="id"
                                    item-text="name"
                                    v-model="query.estatus"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn outlined @click="clear" class="text-caption">
                            Limpiar
                        </v-btn>
                        <v-btn color="success" class="text-caption" @click="getDataFromApi()">
                            aplicar filtro
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-menu>
            <v-spacer></v-spacer>
            <v-btn color="success" @click="open('form')" class="text-caption">
                Agregar nuevo admin
            </v-btn>
        </v-toolbar>

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
                <template v-slot:[`item.fullname`]="{item}">
                    <v-avatar size="36px" class="mr-2">
                        <img
                            :src="`${$axios.defaults.baseURL}/administrador/${item.image}`"
                            alt="avatar"
                        >
                    </v-avatar>
                    {{item.nombre}} {{item.apellidos}}
                </template>

                <template v-slot:[`item.estado`]="{item}">
                    <v-chip :color="item.estatus == 1 ? 'success': 'error'">{{item.estatus == 1 ? 'Activo': 'Inactivo'}}</v-chip>
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
                            <v-list-item @click="open('show', item)">
                                <v-list-item-title>
                                    <v-icon color="blue"> mdi-pen </v-icon>
                                        Editar
                                </v-list-item-title>
                            </v-list-item>

                            <v-list-item @click="DialogRemove(item)">
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

        <v-dialog v-model="dialog" width="350">
            <v-card v-if="dialog">
                <v-card-title class="text-h5 lighten-2">
                    Eliminar administrador
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col cols="12">
                            ¿Estas seguro de eliminar a este administrador?
                        </v-col>
                    </v-row>
                    <v-row >
                        <v-col cols="12">
                            <v-avatar size="36px" class="mr-2">
                                <img
                                    :src="`${$axios.defaults.baseURL}/administrador/${admin.image}`"
                                    alt="avatar"
                                >
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row dense>
                        <v-col cols="12">
                            {{admin.correo}}
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn  text @click="dialog = false">CancelaR</v-btn>
                    <v-btn color="success" text @click="remove">Eliminar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <v-overlay :value="overlay" :z-index="9999">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-card>
</template>

<script>
    import {mapActions, mapState} from "vuex"
    export default {
        name:'PageMain',
        props:['row'],
        data () {
            return {
                query:{
                    name: null,
                    area: null,
                    estatus: null
                },
                search: '',
                loading: true,
                count: 0,
                rows: [],
                options: {},
                menu: false,
                headers: [
                    { text: 'Administrador', value:'fullname', sortable: false  },
                    { text: 'Área', value: 'area.nombre' },
                    { text: 'Correo electrico', value: 'correo', },
                    { text: 'Estatus', value: 'estado', sortable: false },
                    { text: 'Detalles', value: 'action', sortable: false }
                ],

                dialog: false,
                admin: null,
                overlay: false
            }
        },
        computed:{
            ...mapState({  
                areas: state => state.areas,
                estatus: state => state.estatus,
            }),
        },
        watch: {
            options: {
                handler () {
                    this.getDataFromApi()
                },
                deep: true,
            },
        },
        beforeMount(){
            this.getAreas();
        },
        methods: {
            ...mapActions([
                'getAreas'
            ]),
            async getDataFromApi () {
                try{
                    this.menu = false
                    this.loading = true
                    this.overlay = true;
                    const {page, itemsPerPage } = this.options
                    this.query.name = this.search.trim() == '' ? null : this.search 
                    let query = JSON.stringify(this.query);
                    let {data} = await this.$axios.get(`/administrador?query=${query}&limit=${itemsPerPage}&page=${page}`);
                    this.overlay = false;
                    this.rows = data.data;
                    this.count = data.count;
                    this.loading = false;
                }catch(exception){
                    this.overlay = false;
                    this.loading = false;
                    console.error(exception);
                }
            },
            open(page, row=null){
                this.$emit('page', {page:page, row:row})
            },
            async clear(){
                for(let key in this.query){
                    this.query[key] = null;
                }
                this.menu = false;
                await this.getDataFromApi();
            },
            DialogRemove(row){
                this.admin = row;
                this.dialog = true
            },
            async remove(){
                try{
                    this.overlay = true;
                    let {data} = await this.$axios.delete(`administrador/${this.admin.id}/delete`)
                    this.overlay = false;
                    this.dialog = false;
                    if(data.response){
                        await this.getDataFromApi();
                        return;
                    }
                }catch(exception){
                    this.overlay = false;
                    console.error(exception)
                }
            }
        },
    }
</script>

<style>

</style>