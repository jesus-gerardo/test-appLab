<template>
    <v-card dense>
        <v-card-title primary-title>
            {{action == 0 ? 'Agregar administrador': 'Editar administrador'}}
        </v-card-title>

        <v-card-text>
            <v-form ref="admin">
                <v-row dense>
                    <v-col cols="12">
                        <Croopie
                            v-if="load"
                            :onLoadImage="onLoadImage"
                            :namePhoto="namePhoto"
                            :_src="`${$axios.defaults.baseURL}/administrador/`"
                            ref="crop"
                        />
                    </v-col>
                </v-row>
            
                <v-row class="mt-3">
                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-row dense>
                            <v-col cols="12" class="text-body-2">
                                <v-text-field
                                    v-model="form.nombre"
                                    label="Nombre(s)"
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-row dense>
                            <v-col cols="12" class="text-body-2">
                                <v-text-field
                                    v-model="form.apellidos"
                                    label="Apellidos"
                                    outlined
                                    dense
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-row dense>
                            <v-col cols="12" class="text-body-2">
                                <v-text-field
                                    v-model="form.correo"
                                    label="Correo electrónico"
                                    outlined
                                    dense
                                    :rules="[rules.required, rules.email]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-row dense>
                            <v-col cols="12" class="text-body-2">
                                <v-select
                                    :items="areas"
                                    label="Área"
                                    outlined
                                    dense
                                    item-value="id"
                                    item-text="nombre"
                                    v-model="form.area_id"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>

                    <v-col cols="12" sm="12" md="6" lg="4">
                        <v-row dense>
                            <v-col cols="12" class="text-body-2">
                                <v-select
                                    :items="estatus"
                                    label="Estatus"
                                    outlined
                                    dense
                                    item-value="id"
                                    item-text="name"
                                    v-model="form.estatus"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>

                <v-row dense>
                    <v-col cols="12">
                        <v-divider></v-divider>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
        
        <v-card-actions>
            <v-btn color="" @click="open('main')" class="text-caption">
                Cancelar
            </v-btn>
            <v-btn color="success" class="text-caption" @click="store">
                {{action == 0 ? 'Agregar administrador':'Guardar cambios'}}
            </v-btn>
        </v-card-actions>

        <v-overlay :value="overlay" :z-index="9999">
            <v-progress-circular indeterminate size="64"></v-progress-circular>
        </v-overlay>
    </v-card>
</template>

<script>
    import {RULES} from "./../../../plugins/rules";
    import Croopie from "../../../plugins/Croppie.vue";
    import {mapActions, mapState} from "vuex"
    export default {
        name:"PageForm",
        props:['row'],
        mixins: [RULES],
        components: {
            Croopie
        },
        data(){
            return{
                action: 0,
                load: false,
                form:{
                    id:null,
                    nombre: null,
                    apellidos: null,
                    correo: null,
                    area_id: null,
                    estatus: null
                },
                file: null,
                namePhoto: "no-imagen.png",
                overlay: false
            }
        }, mounted(){
            this.action = 0; // update
            if(this.row != null){
                this.action = 1; // update
                this.form = Object.assign({}, this.row)
                this.namePhoto = this.form.image
            }
            this.load = true;
        },
        computed:{
            ...mapState({  
                areas: state => state.areas,
                estatus: state => state.estatus,
            }),
        }, beforeMount(){
            this.getAreas();
        }, methods:{
            ...mapActions([
                'getAreas'
            ]),
            open(page){
                this.$emit('page', {page:page, row:null})
            },
            onLoadImage(file) {
                try {
                    this.file = file;
                    this.urlPhoto = URL.createObjectURL(file);
                    this.$refs.crop.upload_file(this.urlPhoto);
                } catch (error) {
                    console.error(error)
                }
            },
            async store(){
                try{
                    let valid = this.$refs.admin.validate();
                    if (!valid) {
                        return false;
                    }
                    this.overlay = true;
                    let form = new FormData();

                    if(this.form.id == null){
                        delete this.form.id;
                    }

                    for(let key in this.form){
                        form.append(key, this.form[key]);
                    }
                    if (this.file != null) {
                        form.append("upload", this.file);
                    }
                    let {data} = await this.$axios.post('administrador/store', form);
                    this.overlay = false;
                    if(!data.response){
                        return;
                    }
                    this.open('main');    
                }catch(exception){
                    this.overlay = false;
                    console.log(exception)
                }
            },
        }
    }
</script>

<style>

</style>