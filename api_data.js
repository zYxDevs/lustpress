define({ "api": [
  {
    "type": "get",
    "url": "/pornhub/get?id=:id",
    "title": "Get Pornhub",
    "name": "Get_pornhub",
    "group": "pornhub",
    "description": "<p>Get a pornhub video based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/pornhub/get?id=ph63c4e1dc48fe7",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/pornhub/get?id=ph63c4e1dc48fe7\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/pornhub/get?id=ph63c4e1dc48fe7\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/pornhub/pornhubGet.ts",
    "groupTitle": "pornhub",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/pornhub/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pornhub/get?id=:id",
    "title": "Get Pornhub related videos",
    "name": "Get_pornhub_related_videos",
    "group": "pornhub",
    "description": "<p>Get a related pornhub videos based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/pornhub/get?id=ph63c4e1dc48fe7",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/pornhub/get?id=ph63c4e1dc48fe7\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/pornhub/get?id=ph63c4e1dc48fe7\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/pornhub/pornhubGetRelated.ts",
    "groupTitle": "pornhub",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/pornhub/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pornhub/random",
    "title": "Random pornhub video",
    "name": "Random_pornhub",
    "group": "pornhub",
    "description": "<p>Gets random pornhub video</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/pornhub/random",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/pornhub/random\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/pornhub/random\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/pornhub/pornhubRandom.ts",
    "groupTitle": "pornhub",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/pornhub/random"
      }
    ]
  },
  {
    "type": "get",
    "url": "/pornhub/search",
    "title": "Search pornhub videos",
    "name": "Search_pornhub",
    "group": "pornhub",
    "description": "<p>Search pornhub videos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Keyword to search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sort",
            "defaultValue": "mr",
            "description": "<p>Sort by</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/pornhub/search?key=milf\ncurl -i https://lust.scathach.id/pornhub/search?key=milf&page=2&sort=mr",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/pornhub/search?key=milf\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/pornhub/search?key=milf\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/pornhub/pornhubSearch.ts",
    "groupTitle": "pornhub",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/pornhub/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/redtube/random",
    "title": "Get random redtube",
    "name": "Get_random_redtube",
    "group": "redtube",
    "description": "<p>Get a random redtube video</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/redtube/random",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/redtube/random\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/redtube/random\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/redtube/redtubeRandom.ts",
    "groupTitle": "redtube",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/redtube/random"
      }
    ]
  },
  {
    "type": "get",
    "url": "/redtube/get?id=:id",
    "title": "Get Redtube",
    "name": "Get_redtube",
    "group": "redtube",
    "description": "<p>Get a redtube video based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/redtube/get?id=42763661",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/redtube/get?id=42763661\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/redtube/get?id=42763661\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/redtube/redtubeGet.ts",
    "groupTitle": "redtube",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/redtube/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/redtube/get?id=:id",
    "title": "Get redtube related videos",
    "name": "Get_redtube_related_videos",
    "group": "redtube",
    "description": "<p>Get a related redtube videos based on id</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/redtube/get?id=41698751",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/redtube/get?id=41698751\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/redtube/get?id=41698751\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/redtube/redtubeGetRelated.ts",
    "groupTitle": "redtube",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/redtube/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/redtube/search",
    "title": "Search redtube videos",
    "name": "Search_redtube",
    "group": "redtube",
    "description": "<p>Search redtube videos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Keyword to search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/redtube/search?key=milf\ncurl -i https://lust.scathach.id/redtube/search?key=milf&page=2",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/redtube/search?key=milf\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/redtube/search?key=milf\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/redtube/redtubeSearch.ts",
    "groupTitle": "redtube",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/redtube/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xhamster/random",
    "title": "Get random xhamster",
    "name": "Get_random_xhamster",
    "group": "xhamster",
    "description": "<p>Get a random xhamster video</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xhamster/random",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xhamster/random\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xhamster/random\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xhamster/xhamsterRandom.ts",
    "groupTitle": "xhamster",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xhamster/random"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xhamster/get?id=:id",
    "title": "Get related xhamster",
    "name": "Get_related_xhamster",
    "group": "xhamster",
    "description": "<p>Get a xhamster video based on related id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xhamster/related?id=videos/horny-makima-tests-new-toy-and-cums-intensely-xhAa5wx",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xhamster/related?id=videos/horny-makima-tests-new-toy-and-cums-intensely-xhAa5wx\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xhamster/related?id=videos/horny-makima-tests-new-toy-and-cums-intensely-xhAa5wx\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xhamster/xhamsterGetRelated.ts",
    "groupTitle": "xhamster",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xhamster/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xhamster/get?id=:id",
    "title": "Get xhamster",
    "name": "Get_xhamster",
    "group": "xhamster",
    "description": "<p>Get a xhamster video based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xhamster/get?id=videos/horny-makima-tests-new-toy-and-cums-intensely-xhAa5wx",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xhamster/get?id=videos/horny-makima-tests-new-toy-and-cums-intensely-xhAa5wx\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xhamster/get?id=videos/horny-makima-tests-new-toy-and-cums-intensely-xhAa5wx\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xhamster/xhamsterGet.ts",
    "groupTitle": "xhamster",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xhamster/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xhamster/search",
    "title": "Search xhamster videos",
    "name": "Search_xhamster",
    "group": "xhamster",
    "description": "<p>Search xhamster videos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Keyword to search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xhamster/search?key=milf\ncurl -i https://lust.scathach.id/xhamster/search?key=milf&page=2",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xhamster/search?key=milf\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xhamster/search?key=milf\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xhamster/xhamsterSearch.ts",
    "groupTitle": "xhamster",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xhamster/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xnxx/random",
    "title": "Get random xnxx",
    "name": "Get_random_xnxx",
    "group": "xnxx",
    "description": "<p>Get a random xnxx video</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xnxx/random",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xnxx/random\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xnxx/random\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xnxx/xnxxRandom.ts",
    "groupTitle": "xnxx",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xnxx/random"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xnxx/get?id=:id",
    "title": "Get related xnxx",
    "name": "Get_related_xnxx",
    "group": "xnxx",
    "description": "<p>Get a xnxx video based on related id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xnxx/related?id=video-17vah71a/makima_y_denji",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xnxx/related?id=video-17vah71a/makima_y_denji\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xnxx/related?id=video-17vah71a/makima_y_denji\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xnxx/xnxxGetRelated.ts",
    "groupTitle": "xnxx",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xnxx/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xnxx/get?id=:id",
    "title": "Get xnxx",
    "name": "Get_xnxx",
    "group": "xnxx",
    "description": "<p>Get a xnxx video based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xnxx/get?id=video-17vah71a/makima_y_denji",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xnxx/get?id=video-17vah71a/makima_y_denji\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xnxx/get?id=video-17vah71a/makima_y_denji\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xnxx/xnxxGet.ts",
    "groupTitle": "xnxx",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xnxx/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xnxx/search",
    "title": "Search xnxx videos",
    "name": "Search_xnxx",
    "group": "xnxx",
    "description": "<p>Search xnxx videos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Keyword to search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>Page number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xnxx/search?key=milf\ncurl -i https://lust.scathach.id/xnxx/search?key=milf&page=2",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xnxx/search?key=milf\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xnxx/search?key=milf\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xnxx/xnxxSearch.ts",
    "groupTitle": "xnxx",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xnxx/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xvideos/random",
    "title": "Get random xvideos",
    "name": "Get_random_xvideos",
    "group": "xvideos",
    "description": "<p>Get a random xvideos video</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xvideos/random",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xvideos/random\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xvideos/random\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xvideos/xvideosRandom.ts",
    "groupTitle": "xvideos",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xvideos/random"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xvideos/get?id=:id",
    "title": "Get related xvideos",
    "name": "Get_related_xvideos",
    "group": "xvideos",
    "description": "<p>Get a xvideos video based on related id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xvideos/related?id=video73564387/cute_hentai_maid_with_pink_hair_fucking_uncensored_",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xvideos/related?id=video73564387/cute_hentai_maid_with_pink_hair_fucking_uncensored_\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xvideos/related?id=video73564387/cute_hentai_maid_with_pink_hair_fucking_uncensored_\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xvideos/xvideosGetRelated.ts",
    "groupTitle": "xvideos",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xvideos/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xvideos/get?id=:id",
    "title": "Get xvideos",
    "name": "Get_xvideos",
    "group": "xvideos",
    "description": "<p>Get a xvideos video based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xvideos/get?id=video73564387/cute_hentai_maid_with_pink_hair_fucking_uncensored_",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xvideos/get?id=video73564387/cute_hentai_maid_with_pink_hair_fucking_uncensored_\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xvideos/get?id=video73564387/cute_hentai_maid_with_pink_hair_fucking_uncensored_\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xvideos/xvideosGet.ts",
    "groupTitle": "xvideos",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xvideos/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/xvideos/search",
    "title": "Search xvideos videos",
    "name": "Search_xvideos",
    "group": "xvideos",
    "description": "<p>Search xvideos videos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Keyword to search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>Page number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/xvideos/search?key=milf\ncurl -i https://lust.scathach.id/xvideos/search?key=milf&page=2",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/xvideos/search?key=milf\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/xvideos/search?key=milf\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/xvideos/xvideosSearch.ts",
    "groupTitle": "xvideos",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/xvideos/search"
      }
    ]
  },
  {
    "type": "get",
    "url": "/youporn/random",
    "title": "Get random youporn",
    "name": "Get_random_youporn",
    "group": "youporn",
    "description": "<p>Get a random youporn video</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/youporn/random",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/youporn/random\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/youporn/random\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/youporn/youpornRandom.ts",
    "groupTitle": "youporn",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/youporn/random"
      }
    ]
  },
  {
    "type": "get",
    "url": "/youporn/get?id=:id",
    "title": "Get related youporn",
    "name": "Get_related_youporn",
    "group": "youporn",
    "description": "<p>Get a youporn video based on related id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/youporn/related?id=16621192/chainsaw-man-fuck-makima-3d-porn-60-fps",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/youporn/related?id=16621192/chainsaw-man-fuck-makima-3d-porn-60-fps\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/youporn/related?id=16621192/chainsaw-man-fuck-makima-3d-porn-60-fps\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/youporn/youpornGetRelated.ts",
    "groupTitle": "youporn",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/youporn/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/youporn/get?id=:id",
    "title": "Get youporn",
    "name": "Get_youporn",
    "group": "youporn",
    "description": "<p>Get a youporn video based on id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Video ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/youporn/get?id=16621192/chainsaw-man-fuck-makima-3d-porn-60-fps",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/youporn/get?id=16621192/chainsaw-man-fuck-makima-3d-porn-60-fps\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/youporn/get?id=16621192/chainsaw-man-fuck-makima-3d-porn-60-fps\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/youporn/youpornGet.ts",
    "groupTitle": "youporn",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/youporn/get?id=:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "/youporn/search",
    "title": "Search youporn videos",
    "name": "Search_youporn",
    "group": "youporn",
    "description": "<p>Search youporn videos</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>Keyword to search</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "1",
            "description": "<p>Page number</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nHTTP/1.1 400 Bad Request",
          "type": "json"
        }
      ]
    },
    "examples": [
      {
        "title": "curl",
        "content": "curl -i https://lust.scathach.id/youporn/search?key=milf\ncurl -i https://lust.scathach.id/youporn/search?key=milf&page=2",
        "type": "curl"
      },
      {
        "title": "JS/TS",
        "content": "import axios from \"axios\"\n\naxios.get(\"https://lust.scathach.id/youporn/search?key=milf\")\n.then(res => console.log(res.data))\n.catch(err => console.error(err))",
        "type": "js"
      },
      {
        "title": "Python",
        "content": "import aiohttp\nasync with aiohttp.ClientSession() as session:\n async with session.get(\"https://lust.scathach.id/youporn/search?key=milf\") as resp:\n   print(await resp.json())",
        "type": "python"
      }
    ],
    "version": "0.0.0",
    "filename": "src/controller/youporn/youpornSearch.ts",
    "groupTitle": "youporn",
    "sampleRequest": [
      {
        "url": "https://lust.scathach.id/youporn/search"
      }
    ]
  }
] });
