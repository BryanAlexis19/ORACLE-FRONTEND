import { clientServices } from '../service/client-service.js'

console.log(clientServices)
const crearLinea = (nombre, email) => {
  const nuevaLinea = document.createElement("tr");
  const linea = `
      <td class="td" data-td>${nombre}</td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html"
              class="simple-button simple-button--edit"
              >Editar</a
            >
          </li>
          <li>
            <button
              class="simple-button simple-button--delete"
              type="button"
            >
              Eliminar
            </button>
          </li>
        </ul>
      </td>
      `;
  nuevaLinea.innerHTML = linea;
  return nuevaLinea;
};

const tabla = document.querySelector("[data-table]");

clientServices.listaClientes()
  .then((data) => {
    data.forEach((perfil) => {
      tabla.appendChild(crearLinea(perfil.nombre, perfil.email));
    });
  })
  .catch((error) => {
    alert("Ocurrió un error");
  });
