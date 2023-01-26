package controller

import (
	"github.com/gofiber/fiber/v2"
)

func Helloword(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}
