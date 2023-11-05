import { buscarProductosByidSubCategoria } from "../dao/productoDAO.js";
import { responseTypeService, responseTypeServiceError } from "../response/responseTypeService.js";

export const buscarProductoByIdSubCategoriaService = async (value) => {

    try {


        const resultado = await buscarProductosByidSubCategoria(value.idSubCategoria);

        return responseTypeService(resultado)

    } catch (error) {
        console.log(error);
        return responseTypeServiceError(error)

    }

}
export default { buscarProductoByIdSubCategoriaService }