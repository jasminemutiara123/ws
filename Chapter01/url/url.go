package url

import (
	"chapter01/controller"

	"github.com/gofiber/fiber/v2"
)

func Web(page *fiber.App) {
	page.Get("/", controller.GetHelloword)
	page.Post("/person", controller.PostPerson)

}
