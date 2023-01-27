package controller

import (
	"chapter02/module"
	"fmt"
	"log"

	"github.com/gofiber/websocket/v2"
)

func WebSocket(c *websocket.Conn) {
	// Register the client
	s := module.Client{
		Id:   "test",
		Conn: c,
	}
	// When the function returns, unregister the client and close the connection
	defer func() {
		module.Unregister <- s.Id
		c.Close()
	}()

	module.Register <- s

	for {
		messageType, message, err := c.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Println("read error:", err)
			}

			return // Calls the deferred function, i.e. closes the connection on error
		}

		if messageType == websocket.TextMessage {
			// Broadcast the received message
			module.Broadcast <- string(message)
		} else {
			log.Println("websocket message received of type", messageType)
		}
	}

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
