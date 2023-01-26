package controller

import (
	"fmt"
	"log"

	"github.com/gofiber/websocket/v2"
)

func WebSocket(c *websocket.Conn) {
	for {
		mtype, msg, err := c.ReadMessage()
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

func GetWebSocketId(c *websocket.Conn) {
	id := c.Params("id")
	fmt.Println(id)
	for {
		mtype, msg, err := c.ReadMessage()
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
