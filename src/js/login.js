// control js Login


document.addEventListener("DOMContentLoaded", function(event) {
    window.validate=new validateFormHTML5('FormLogin',{
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
    },newUser);
});


function validateSafari() {
    console.log('Validate safari');
}

function newUser(event){
    event.preventDefault();
     var ajax={
            url:'/test/mock_json/token.json',
            method: 'GET',
            params:{
                email:document.getElementById('LoginEmail').value,
                pass:document.getElementById('LoginPassword').value
            }
        };
        loadFile(ajax)
            .then(function(resolve){
                if(typeof Stores!==undefined){
                   localStorage.setItem('token',JSON.parse(resolve).token);
                }
                location.href='user_01.html';
            },
            function(error) {
                console.error("Failed!", error);
                return false;
            }); 
}