<template>
    <v-row>
        <v-col cols="12" lg="6" md="6" sm="5">
            <v-menu
                :ref="ref_1"
                v-model="menu_1"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="tiempo_1"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        dense
                        :disabled="!habil"
                        :value="tiempo_1"
                        label="Hora inicio"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :rules="[habil ? rules.required : true]"
                    ></v-text-field>
                </template>
                <v-time-picker
                    v-if="menu_1"
                    v-model="tiempo_1"
                    :min="final == null? null : final.fin"
                    full-width
                    format="24hr"
                    scrollable
                    @click:minute="update(tiempo_1)"
                ></v-time-picker>
            </v-menu>
        </v-col>
    
        <v-col cols="12" lg="5" md="5" sm="5">
            <v-menu
                :ref="ref_2"
                v-model="menu_2"
                :close-on-content-click="false"
                :nudge-right="40"
                :return-value.sync="tiempo_2"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        dense
                        :disabled="!habil"
                        :value="tiempo_2"
                        :rules="[habil ? rules.required : true]"
                        label="Hora finalización"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        
                    ></v-text-field>
                </template>
                <v-time-picker
                    v-if="menu_2"
                    v-model="tiempo_2"
                    full-width
                    :min="tiempo_1"
                    format="24hr"
                    scrollable
                    @click:minute="update_2(tiempo_2)"
                ></v-time-picker>
            </v-menu> 
        </v-col>

        <v-col cols="12" lg="1" md="1" sm="1">
            <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                    <v-btn icon :disabled="!habil" @click="$emit('eliminar', index)">
                        <v-icon color="red" v-on="on">mdi-delete-forever</v-icon>
                    </v-btn>
                </template>
                <span>Eliminar</span>
            </v-tooltip>
        </v-col>
    </v-row>
</template>

<script>
    import { RULES } from "@/mixins/rules";
    export default {
        name:"InputHorario",
        mixins: [ RULES ],
        props:{
            ref_1:{
                type:String,
                default: Math.random().toString(),
            },
            ref_2:{
                type:String,
                default: Math.random().toString(),
            },
            calendario_1:{
                type:Boolean,
                default: false,
            },
            calendario_2:{
                type:Boolean,
                default: false,
            },
            habil: {
                type: Boolean,
                default: false,
            },
            final: Object,
            inicio: String,
            fin: String,
            index: Number,
        },
        data: ()=>{
            return {
                menu_1: false,
                menu_2: false,
                tiempo_1: null,
                tiempo_2: null,
            }
        },
        created(){
            this.tiempo_1 = this.inicio;
            this.tiempo_2 = this.fin;
        },
        watch: {
            tiempo_1(val){
                this.$emit('update:inicio', val);
            },
            tiempo_2(val){
                this.$emit('update:fin', val);
            }
        },
        methods:{
            update(valor){
                this.$refs[this.ref_1].save(valor)
            },
            update_2(valor){
                this.$refs[this.ref_2].save(valor)
            }
        },
        destroyed(){
            // console.log('Se ha eliminado la información');
        }
    }
</script>

<style>

</style>