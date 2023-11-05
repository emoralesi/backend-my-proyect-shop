import { sequelize } from "../db/Sequelize.js";
import { responseTypeDAO } from "../response/responseTypeDAO.js";

export const buscarProductosByidSubCategoria = async (idSubCategoria) => {

    try {

        const results = await sequelize.query(
            `select p.id_producto, c.nombre as nombreCategoria, sc.nombre_sub_categoria  as nombreSubCategoria , ssc.nombre_sub_sub_categoria as nombreSubSubCategoria , p.nombre, p.precio , p.sku , p.isactive, p.stock, c.id_categoria, sc.id_sub_categoria, ssc.id_sub_sub_categoria  
            from "schema-admin".PRODUCTO p
            inner join "schema-admin".rel_producto_categoria_filtro rp on (p.id_producto  = rp.id_producto )
            inner join "schema-admin".rel_sub_categoria_filtro  rs on (rs.id_rel_sub_categoria_filtro = rp.id_rel_sub_categoria_filtro)
            inner join "schema-admin".sub_sub_categoria  ssc on (ssc.id_sub_sub_categoria = rs.id_sub_sub_categoria)
            inner join "schema-admin".sub_categoria sc  on (sc.id_sub_categoria = ssc.id_sub_categoria)
            inner join "schema-admin".categoria c on (c.id_categoria = sc.id_categoria)
            where sc.id_sub_categoria = (:idSubCategorias) and p.isactive = true and p.stock >= 1
            group by p.id_producto, c.nombre, sc.nombre_sub_categoria , ssc.nombre_sub_sub_categoria, p.nombre, p.precio , p.sku , p.isactive, c.id_categoria, sc.id_sub_categoria, ssc.id_sub_sub_categoria
            order by id_producto asc`,
            {
                replacements: { idSubCategorias: idSubCategoria }
            }
        );
        return responseTypeDAO(results)

    } catch (error) {

        console.log(error);
        throw error
    }
}

export default { buscarProductosByidSubCategoria }
