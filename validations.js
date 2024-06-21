import { body } from "express-validator";

export const loginValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("fullName", "Enter your name").isLength({ min: 3 }),
  body("avatarUrl", "Incorrect link to avatar").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter article title.").isLength({ min: 3 }).isString(),
  body("text", "Enter article text")
    .isLength({
      min: 3,
    })
    .isString(),
  body("tags", "Incorrect tag format (enter the array).").optional().isString(),
  body("imageUrl", "Incorrect link to image").optional().isString(),
];
