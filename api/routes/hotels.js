import express from "express";
import {createHotel, getHotels, getHotel, updateHotel, deleteHotel,getHotelRooms} from "../controller/hotel.js"
import {verifyAdmin} from "../utils/verifyToken.js"
import { countByCity, countByType } from "../controller/hotel.js";
const router=express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//READ ALL
router.get("/", getHotels);

//READ ONE
router.get("/find/:id", getHotel)

// UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;