import { buscarCategorias } from "../dao/categoriaDAO.js";
import { responseTypeService, responseTypeServiceError } from "../response/responseTypeService.js";

export const buscarCategoriasService = async () => {

    try {

        const resultado = await buscarCategorias();

        return responseTypeService(resultado)

    } catch (error) {

        console.log(error);
        return responseTypeServiceError(error)

    }

}

export default { buscarCategoriasService }