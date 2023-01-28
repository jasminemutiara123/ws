package controller

import (
	"fmt"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/websocket/v2"
	"github.com/whatsauth/wasocket"
)

func WebSocket(c *websocket.Conn) {
	a := wasocket.RunSocket(c)
	fmt.Println(a)

}

func GetHelloword(c *fiber.Ctx) error {
	a := wasocket.Message{
		Id:      "testing",
		Message: "hello word",
	}
	var ada string
	//wasocket.SendMesssage <- a
	if wasocket.Clients["testing"] != nil {
		ada = "soket tersedia"
		wasocket.SendStructTo("testing", a)
	}
	return c.SendString(ada)
}

func GetWebSocketId(c *websocket.Conn) {
	id := c.Params("id")
	fmt.Println(id)
	var (
		mtype int
		msg   []byte
		err   error
	)
	for {
		mtype, msg, err = c.ReadMessage()
		if err != nil {
			break
		}
		log.Printf("Read: %s", msg)

		err = c.WriteMessage(mtype, msg)
		if err != nil {
			break
		}
	}

}
