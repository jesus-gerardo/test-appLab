export const RULES = {
    data: function(){
        return {
            rules: {
              required: v => {
                if(!!v || v===0){
                    if((typeof v == 'string') && v.trim() == ''){
                        return 'El campo es requerido';  
                    }
                    return true;
                }else{
                    return 'El campo es requerido';
                }
              },
              email: v => {
                  if((v || '').length==0){
                      return true;
                  }else{
                      return /.+@.+\..+/.test(v) || 'Correo no válido'
                  }
              },
              numeric: v => { return /^[0-9]+$/.test(v) || 'El campo solo acepta números' }
            },
        }
    },
    methods: {
    }
}
