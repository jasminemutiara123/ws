package controller

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
)

type Person struct {
	Name  string `json:"name" xml:"name" form:"name"`
	Email string `json:"email" xml:"email" form:"email"`
}

func GetHelloword(c *fiber.Ctx) error {
	return c.SendString("Hello, World!")
}

func PostPerson(c *fiber.Ctx) error {
	person := new(Person)

	// Binds the request body to the Person struct
	if err := c.BodyParser(person); err != nil {
		return err
	}

	// Print data from the Person struct
	fmt.Println(person.Name, person.Email)
	return c.SendString(person.Name)
}
