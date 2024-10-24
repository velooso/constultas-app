import { Router } from "express";
import controllersDoctor from "./controllers/controllers.doctor.js";

const router = Router();

router.get("/doctors", controllersDoctor.Listar);

export default router;