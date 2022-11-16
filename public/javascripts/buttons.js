//const url = "https://crud-reto2.herokuapp.com";
const url = "http://localhost:9000";
const path = "/api";

const element =document.querySelector('table.table-bordered.table-striped.text-center.mt-4');
element.addEventListener("click",(e)=>{
    if (e.target.classList.contains('btn-outline-info')){const id = e.target.attributes.value.nodeValue;updUser(id)}
    if (e.target.classList.contains('btn-outline-danger')){const id = e.target.attributes.value.nodeValue;delUser(id)}
});


async function updUser(id) {
    let data = {};
    data.id = id;
    await fetch(url + '/update/' + id, {
        method: 'GET',
        headers: getHeaders()
    });
}
//------*********POST*******-------
//,
//         body: JSON.stringify(data)
/**
 * Parametros Headers necesarios para la peticiion fetch
 *
 * @return Parametros Headers
 *
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
function getHeaders() {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
}

/**
 * Metodo para eliminar un usuario mediante la peticion fetch
 *
 * @author Jose leonardo poveda <shiwirockztar@gmail.com.co>
 * @since 1.0.0
 */
async function delUser(id) {
    Swal.fire({
        title: 'Estas seguro?',
        text: "Desea eliminar este usuario!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, eliminar!'
    }).then((result) => {
        if (result.isConfirmed) {

            const request = fetch(url + path + '/delete/' + id, {
                method: 'DELETE',
                headers: getHeaders()
            });
            Swal.fire(
                'Borrado!',
                'Usuario eliminado.',
                'success'
            ).then(() => {
                location.reload();
            });
        }
    });
}