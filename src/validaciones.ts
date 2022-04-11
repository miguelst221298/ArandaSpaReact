import * as Yup from 'yup'
export default function configurarValidaciones(){
    Yup.addMethod(Yup.number, 'mayorQueCero' , function (){
        return this.test('mayor-que-cero', 'debes elegir un valor', 
        function(valor){
            if(valor){
                return valor > 0;
            }
            return false;
        })
    })
}