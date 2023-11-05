import { sequelize } from '../db/Sequelize.js';
import { responseTypeDAO } from "../response/responseTypeDAO.js";

export const buscarCategorias = async () => {

    try {
        const results = await sequelize.query('SELECT * FROM "schema-admin".CATEGORIA');
        return responseTypeDAO(results)

    } catch (error) {
        // console.log(error);
        throw error
    }
}

export default { buscarCategorias }