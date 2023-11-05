import express from 'express';
import { responseTypeRoute } from '../response/responseTypeRoute.js';
import { buscarCategoriasService } from '../service/categoriaService.js';
import { buscarProductoByIdSubCategoriaService } from '../service/productoService.js';
import { buscarSubCategoriasService } from '../service/subCategoriaService.js';
import { buscarRelProductoCategoriaFiltroBySubService } from '../service/relProductoCategoriaFiltroService.js';

const app = express()
const router = express.Router()
app.use('/service', router)

// CATEGORIA
router.get('/obtenerCategoria', async (req, res) => {

    const resultado = await buscarCategoriasService();

    responseTypeRoute(resultado, res)

})

router.get('/obtenerSubCategoriaYSubSub', async (req, res) => {

    const resultado = await buscarSubCategoriasService();

    responseTypeRoute(resultado, res)

})

// PRODUCTO

router.post('/obtenerProductoByCategoria', async (req, res) => {

    const resultado = await buscarProductoByIdSubCategoriaService(req.body);

    responseTypeRoute(resultado, res)

})

// REL_PRODUCTO_CATEGORIA_FILTRO

router.post('/obtenerRelPRoductoCategoriaFiltroBySub', async (req, res) => {
    const result = await buscarRelProductoCategoriaFiltroBySubService(req.body);

    responseTypeRoute(result, res)
})

export default app