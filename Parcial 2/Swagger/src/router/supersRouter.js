import express from 'express';
import * as controladorSupers from '../controller/supersController.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Superheroe:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único del superhéroe
 *         name:
 *           type: string
 *           description: Nombre del superhéroe
 *         power:
 *           type: string
 *           description: Poderes del superhéroe
 */

/**
 * @swagger
 * tags:
 *   - name: Supers
 *     description: Endpoints para gestionar superhéroes
 */

/**
 * @swagger
 * /supers:
 *   get:
 *     tags:
 *       - Supers
 *     summary: Obtener una lista de todos los supers
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Superheroe'
 *       '404':
 *         description: No hay supers disponibles
 */

/**
 * @swagger
 * /supers/{id}:
 *   get:
 *     tags:
 *       - Supers
 *     summary: Obtener un super por id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID del super
 *     responses:
 *       '200':
 *         description: Operación exitosa
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Superheroe'
 *       '404':
 *         description: No encontrado
 */

/**
 * @swagger
 * /supers/alta:
 *   post:
 *     tags:
 *       - Supers
 *     summary: Crear un nuevo super
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               power:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Creado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Superheroe'
 *       '400':
 *         description: Datos inválidos
 */

router.get('/', (req, res) => {
    controladorSupers.obtenerSupers(req, res);
});

router.get('/:id', (req, res)=>{
    controladorSupers.obtenerSupPorId(req, res);
});

router.post('/alta', (req, res) => {
    controladorSupers.altaSuper(req, res);
});

export const routerSupers = router;