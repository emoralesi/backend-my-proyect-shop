import { sequelize } from "../db/Sequelize.js"
import { responseTypeDAO } from "../response/responseTypeDAO.js";

export const buscarRelProductoCategoriaFiltroBySub = async (idSubCategoria) => {

    try {

        const result = await sequelize.query(
            `select fc.nombre_filtro_categoria , rpcf.nombre_producto_categoria_filtro, count(*) as cantidad from "schema-admin".rel_producto_categoria_filtro rpcf 
            inner join "schema-admin".rel_sub_categoria_filtro rscf on (rscf.id_rel_sub_categoria_filtro = rpcf.id_rel_sub_categoria_filtro)
            inner join "schema-admin".filtro_categoria fc on (fc.id_filtro_categoria = rscf.id_filtro_categoria)
            inner join "schema-admin".sub_sub_categoria ssc on (ssc.id_sub_sub_categoria  = rscf.id_sub_sub_categoria)
            inner join "schema-admin".sub_categoria sc on (sc.id_sub_categoria = ssc.id_sub_categoria)
            where sc.id_sub_categoria = :idSubCategoria
            group by fc.nombre_filtro_categoria , rpcf.nombre_producto_categoria_filtro `, {
            replacements: { idSubCategoria: idSubCategoria }
        }
        )

        return responseTypeDAO(result)

    } catch (error) {
        throw error
    }
}

export default { buscarRelProductoCategoriaFiltroBySub }