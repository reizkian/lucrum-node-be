const express = require("express");
const router = express.Router();

const { createUser, deleteUser, getUser, updateUser } = require("../controller/user");

/**
 * @swagger
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: User's first name
 *         lastName:
 *           type: string
 *           description: User's last name
 *         email:
 *           type: string
 *           description: User's email
 *         phone:
 *           type: string
 *           description: User's phone number
 *         password:
 *           type: string
 *           description: User's password
 *       example:
 *         firstName: Johnny
 *         lastName: Sins
 *         email: sins@gmail.com
 *         phone: +1425i4902352
 *         password: pwd123
 */ 

/**
 * @swagger
 * tags:
 *   name: User
 *   description: The User managing API
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Create a user
 *     tags: [User]
 *     requestBody:
 *       description: Payload data to create a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/user'
 *     responses:
 *       200:
 *         description: success create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.post("/user", createUser);

/**
 * @swagger
 * /user/{userID}:
 *   delete:
 *     summary: Delete a user
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *           required: true
 *     tags: [User]
 *     responses:
 *       200:
 *         description: success create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       409:
 *         description: conflict create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.delete("/user/:userID", deleteUser);

/**
 * @swagger
 * /user/{userID}:
 *   get:
 *     summary: Get personal data of a user 
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *           required: true
 *     tags: [User]
 *     responses:
 *       200:
 *         description: success create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.get("/user/:userID", getUser);

/**
 * @swagger
 * /user/{userID}:
 *   put:
 *     summary: Get personal data of a user 
 *     parameters:
 *       - in: path
 *         name: userID
 *         schema:
 *           type: string
 *           required: true
 *     tags: [User]
 *     requestBody:
 *       description: Payload data to create a user
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *             example:
 *               firstName: Johnny
 *               lastName: Sins
 *               email: sins@gmail.com
 *               phone: +1425i4902352
 *     responses:
 *       200:
 *         description: success create user
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 *       500:
 *         description: internal server error
 *         contents:
 *            application/json:
 *              schema:
 *                message: string
 */
router.put("/user/:userID", updateUser);

module.exports = router;
