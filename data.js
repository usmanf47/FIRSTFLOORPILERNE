var APP_DATA = {
  "scenes": [
    {
      "id": "0-lobby",
      "name": "Lobby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.8614044372746292,
        "pitch": 0.1651013011449507,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 1.598937576722216,
          "pitch": 0.15381000172998327,
          "rotation": 7.853981633974483,
          "target": "1-passage"
        },
        {
          "yaw": 1.985800163027899,
          "pitch": 0.18112551377730668,
          "rotation": 6.283185307179586,
          "target": "2-family-room-lounge"
        },
        {
          "yaw": 0.14461559985057804,
          "pitch": 0.1860792215470557,
          "rotation": 0,
          "target": "4-bedroom-3"
        },
        {
          "yaw": 0.345867664147784,
          "pitch": 0.1874262445259518,
          "rotation": 0.7853981633974483,
          "target": "3-bedroom-2"
        },
        {
          "yaw": 0.9192522770627374,
          "pitch": 0.17738736255205723,
          "rotation": 0,
          "target": "5-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-passage",
      "name": "Passage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 3.0356324829666104,
        "pitch": 0.07639367394858532,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": -0.1655357797008623,
          "pitch": 0.13404782311122965,
          "rotation": 10.995574287564278,
          "target": "0-lobby"
        },
        {
          "yaw": -2.1525282982925056,
          "pitch": 0.37036302819508116,
          "rotation": 0,
          "target": "2-family-room-lounge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-family-room-lounge",
      "name": "Family room lounge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.288384114845492,
          "pitch": 0.1102193661105435,
          "rotation": 0,
          "target": "0-lobby"
        },
        {
          "yaw": -2.3927392056353867,
          "pitch": 0.1639408189817999,
          "rotation": 0,
          "target": "1-passage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.1949384359637492,
          "pitch": 0.18406131300358552,
          "rotation": 7.0685834705770345,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3309410738469403,
          "pitch": 0.18469037156908996,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "yaw": 0.9132896626623488,
        "pitch": 0.05735353898114326,
        "fov": 1.3934346732050444
      },
      "linkHotspots": [
        {
          "yaw": 0.9020830131199755,
          "pitch": 0.07969388285337153,
          "rotation": 0,
          "target": "0-lobby"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "First Floor",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
