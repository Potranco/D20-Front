// control js Login


window.onload=function(){
    window.loginValidate=new validateFormHTML5('FormLogin',{
            formValidate:'true',
            rules: {
                        LoginEmail: {
                           required:true,
                           max_length:'200',
                           min_length:'3'
                        },
                        LoginPassword: {
                            required:true,
                            max_length:'12',
                            min_length:'5'
                        }
            },
            messages: {
                       LoginEmail: {
                           required:'el email es obligatorio',
                           max_length:'Maximo de 200 caracteres',
                           min_length:'Minimo de 3 caracteres'
                       },
                       LoginPassword:{
                            required:'La contraseña es obligatoria',
                            max_length:'Maximo de 12 caracteres',
                            min_length:'Minimo de 5 caracteres'
                       }
            },
            custom: {
                      LoginEmail: {
                          inputCSS:'',
                          labelCSS:'',
                          idError:'LoginEmailError'
                      },
                      LoginPassword: {
                          inputCSS:'',
                          labelCSS:'',
                          idError:'LoginPasswordError'
                      }
            }
    },saveUser);
};



function saveUser() {
   if (typeof(Storage) !== "undefined") {
    localStorage.setItem("email",document.getElementById('LoginEmail').value);
   }
   else {
    document.cookie="userEmail="+document.getElementById('LoginEmail').value;
   }
}