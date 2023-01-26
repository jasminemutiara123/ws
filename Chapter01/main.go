package main

import (
	"chapter01/url"
	"log"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	url.Web(app)
	log.Fatal(app.Listen(":3000"))
}
