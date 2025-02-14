{
	"info": {
		"_postman_id": "fe6a4262-b147-48b8-ae1c-898f911e2183",
		"name": "ToDo",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "36188036"
	},
	"item": [
		{
			"name": "User Profile",
			"item": [
				{
					"name": "SelectProfile",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "UpdateProfile",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				}
			]
		},
		{
			"name": "ToDo List",
			"item": [
				{
					"name": "SelectToDo",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "CreateToDo",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token-key",
								"value": "{{Token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{BaseURL}}/CreateToDo",
							"host": [
								"{{BaseURL}}"
							],
							"path": [
								"CreateToDo"
							]
						}
					},
					"response": []
				},
				{
					"name": "UpdateToDo",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token-key",
								"value": "{{Token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{BaseURL}}/UpdateToDo",
							"host": [
								"{{BaseURL}}"
							],
							"path": [
								"UpdateToDo"
							]
						}
					},
					"response": []
				},
				{
					"name": "UpdateStatusToDo",
					"request": {
						"method": "POST",
						"header": [
							{
								"key": "token-key",
								"value": "{{Token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{BaseURL}}/UpdateStatusToDo",
							"host": [
								"{{BaseURL}}"
							],
							"path": [
								"UpdateStatusToDo"
							]
						}
					},
					"response": []
				},
				{
					"name": "RemoveToDo",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "SelectToDoByStatus",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token-key",
								"value": "{{Token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{BaseURL}}/SelectToDoByStatus",
							"host": [
								"{{BaseURL}}"
							],
							"path": [
								"SelectToDoByStatus"
							]
						}
					},
					"response": []
				},
				{
					"name": "SelectToDoByDate",
					"request": {
						"method": "GET",
						"header": [
							{
								"key": "token-key",
								"value": "{{Token}}",
								"type": "text"
							}
						],
						"url": {
							"raw": "{{BaseURL}}/SelectToDoByDate",
							"host": [
								"{{BaseURL}}"
							],
							"path": [
								"SelectToDoByDate"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "Login Registrarion",
			"item": [
				{
					"name": "UserLogin",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				},
				{
					"name": "CreateProfile",
					"request": {
						"method": "GET",
						"header": []
					},
					"response": []
				}
			]
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "BaseURL",
			"value": "http://localhost:5000/api/v1",
			"type": "string"
		},
		{
			"key": "Token",
			"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3Mzk1MTAzMDUsImRhdGEiOnsiX2lkIjoiNjdhYTMzMTgyNTU1OGYxOGZlOTg5ZWRjIiwiRmlyc3ROYW1lIjoiSm9obiIsIkxhc3ROYW1lIjoiRG9lIiwiRW1haWxBZGRyZXNzIjoiam9obmRvZUBleGFtcGxlLmNvbSIsIk1vYmlsZU51bWJlciI6IjEyMzQ1Njc4OTAiLCJDaXR5IjoiTmV3IFlvcmsiLCJVc2VyTmFtZSI6ImpvaG5kb2UxMjMiLCJQYXNzd29yZCI6InNlY3VyZXBhc3N3b3JkIn0sImlhdCI6MTczOTQyMzkwNX0.2-g99w-hO246luw2stobKYBS827W-H4aj90S8gqqjFs",
			"type": "string"
		}
	]
}