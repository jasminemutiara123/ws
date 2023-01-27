package config

import (
	"os"

	"github.com/gofiber/fiber/v2/middleware/cors"
)

var Internalhost string = os.Getenv("INTERNALHOST") + ":" + os.Getenv("PORT")

var Cors = cors.Config{
	AllowOrigins:     "*.ulbi.ac.id,whatsauth.github.io",
	AllowHeaders:     "Origin",
	ExposeHeaders:    "Content-Length",
	AllowCredentials: true,
}
