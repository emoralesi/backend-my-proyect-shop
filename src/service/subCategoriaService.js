import { buscarSubCategoriasYSubSub } from "../dao/subCategoriaDAO.js";
import { responseTypeService, responseTypeServiceError } from "../response/responseTypeService.js";

export const buscarSubCategoriasService = async () => {

    try {

        const resultado = await buscarSubCategoriasYSubSub();

        return responseTypeService(resultado)

    } catch (error) {

        return responseTypeServiceError(error)

    }

}

export default { buscarSubCategoriasService }