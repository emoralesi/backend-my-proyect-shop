import { sequelize } from "../db/Sequelize.js";
import { responseTypeDAO } from "../response/responseTypeDAO.js";

export const buscarSubCategoriasYSubSub = async (conexion) => {

    try {

        const result = await sequelize.query(
            `select * from "schema-admin".sub_categoria sc 
            inner join "schema-admin".sub_sub_categoria ssc on (sc.id_sub_categoria = ssc.id_sub_categoria)`
        )

        return responseTypeDAO(result)

    } catch (error) {

        console.log(error);
        throw error
    }
}

export default { buscarSubCategoriasYSubSub }