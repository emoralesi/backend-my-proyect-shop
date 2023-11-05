import { buscarRelProductoCategoriaFiltroBySub } from "../dao/relProductoCategoriaFiltro.js"
import { responseTypeService, responseTypeServiceError } from "../response/responseTypeService.js";

export const buscarRelProductoCategoriaFiltroBySubService = async (value) => {

    try {
        const result = await buscarRelProductoCategoriaFiltroBySub(value.idSubCategoria);

        const agrupado = result.rows.reduce((acumulador, elemento) => {
            if (!acumulador[elemento.nombre_filtro_categoria]) {
                acumulador[elemento.nombre_filtro_categoria] = {
                    "nombre_filtro_categoria": elemento.nombre_filtro_categoria,
                    "productos": []
                };
            }

            acumulador[elemento.nombre_filtro_categoria].productos.push({
                "nombre_producto_categoria_filtro": elemento.nombre_producto_categoria_filtro,
                "cantidad": elemento.cantidad
            });

            return acumulador;
        }, {});

        result.rows = agrupado;

        return responseTypeService(result)
    } catch (error) {
        console.log(error);
        return responseTypeServiceError(error)
    }

}