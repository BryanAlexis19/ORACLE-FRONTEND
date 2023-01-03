import { clientServices } from "../service/client-service.js";

const crearLinea = (nombre, email, id) => {
  const nuevaLinea = document.createElement("tr");
  const linea = `
      <td class="td" data-td>${nombre}</td>
      <td>${email}</td>
      <td>
        <ul class="table__button-control">
          <li>
            <a
              href="../screens/editar_cliente.html?id=${id}"
              class="simple-button simple-button--edit"
              >Editar</a
            >
          </li>
          <li>
            <button
              class="simple-button simple-button--delete"
              type="button" id="${id}"
            >
              Eliminar
            </button>
          </li>
        </ul>
      </td>
      `;
  nuevaLinea.innerHTML = linea;
  const btnEliminar = nuevaLinea.querySelector("button");
  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    clientServices
      .eliminarCliente(id)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => alert("Ocurrio un error"));
  });
  return nuevaLinea;
};

const tabla = document.querySelector("[data-table]");

clientServices
  .listaClientes()

  .then((data) => {
    data.forEach(({ nombre, email, id }) => {
      tabla.appendChild(crearLinea(nombre, email, id));
    });
  })
  .catch((error) => {
    console.log(error);
    alert("Ocurrió un error");
  });

