import { body } from "express-validator";

export const registerValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("fullName", "Enter your name").isLength({ min: 3 }),
  body("avatarUrl", "Incorrect link to avatar").optional().isURL(),
];
