import { Router } from "express"
import { deletePhone, getOne, insertPhone, updatePhone, phoneAll } from "../controllers/phones.controller.js"
const router= Router()

router.get('/', phoneAll)
router.get('/:bc', getOne)
router.post('/', insertPhone)
router.put('/:bc', updatePhone)
router.delete('/:bc', deletePhone)

export default router;