package main

import (
	"chapter05/url"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	site := fiber.New()
	site.Use(cors.New())
	url.Web(site)
	log.Fatal(site.Listen(SetPort()))
}

func SetPort() string {
	port := os.Getenv("PORT")
	if len(port) == 0 {
		port = ":3000"
	}
	return port
}
