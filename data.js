var APP_DATA = {
  "scenes": [
    {
      "id": "0-envlab",
      "name": "EnvLab",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.3487145076837947,
        "pitch": 0.2424374331246355,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 2.1244230794430567,
          "pitch": 0.12588801058466537,
          "rotation": 0,
          "target": "1-lab1"
        },
        {
          "yaw": 1.880180990128486,
          "pitch": 0.09447960137150346,
          "rotation": 0,
          "target": "4-wireless"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.6858162363925207,
          "pitch": 0.4269559585651237,
          "title": "Rear Entrance",
          "text": "Cisco's Environmental Simulation Lab"
        },
        {
          "yaw": 3.085077230191877,
          "pitch": 0.31627424093295,
          "title": "Equipment Packaging",
          "text": "Staging for Packaging Qualification Tests"
        }
      ]
    },
    {
      "id": "1-lab1",
      "name": "Lab1",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.400516692304766,
        "pitch": 0.1280892064803396,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -0.9256997730671461,
          "pitch": 0.0725676479442221,
          "rotation": 0,
          "target": "0-envlab"
        },
        {
          "yaw": 2.6658612638448673,
          "pitch": 0.1073411376724902,
          "rotation": 0,
          "target": "2-bigaltitude"
        },
        {
          "yaw": 1.4397974312781496,
          "pitch": 0.17676581555376103,
          "rotation": 0,
          "target": "3-thermal"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.5662260085232056,
          "pitch": 0.1933743344980936,
          "title": "Equipment Racks",
          "text": "Storage and Staging"
        },
        {
          "yaw": -1.291562686540404,
          "pitch": 0.12097833714150141,
          "title": "Thermal Chambers",
          "text": "Text"
        },
        {
          "yaw": -0.5181555310986496,
          "pitch": 0.17436402444394972,
          "title": "Altitude Chamber",
          "text": "Text"
        },
        {
          "yaw": 0.8314993516059488,
          "pitch": 0.20072623226647934,
          "title": "Thermal Chambers",
          "text": "Text"
        },
        {
          "yaw": 2.5097253600440155,
          "pitch": -0.17301755843390865,
          "title": "Large Altitude Chamber",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-bigaltitude",
      "name": "BigAltitude",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.97174416188055,
        "pitch": -0.012240326428113235,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 1.0321499996690768,
          "pitch": -0.008424762944194697,
          "rotation": 0,
          "target": "1-lab1"
        },
        {
          "yaw": 1.9192432418355878,
          "pitch": 0.05936200385289858,
          "rotation": 0,
          "target": "3-thermal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-thermal",
      "name": "Thermal",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.805839838208181,
        "pitch": 0.21716908489134568,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -0.10010024701924536,
          "pitch": -0.020450335976331502,
          "rotation": 0,
          "target": "2-bigaltitude"
        },
        {
          "yaw": 1.6247961812030267,
          "pitch": 0.04431377333761688,
          "rotation": 0,
          "target": "0-envlab"
        },
        {
          "yaw": -2.4662352549761195,
          "pitch": 0.3636103930397976,
          "rotation": 0,
          "target": "4-wireless"
        },
        {
          "yaw": -0.5073504154647281,
          "pitch": 0.062295972923465115,
          "rotation": 0,
          "target": "14-415v-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-wireless",
      "name": "Wireless",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.895617784258608,
        "pitch": 0.030205966830692432,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 2.9443117505964125,
          "pitch": -0.06922878560075496,
          "rotation": 0,
          "target": "5-radio"
        },
        {
          "yaw": -1.0990630137028212,
          "pitch": 0.209566490158398,
          "rotation": 0,
          "target": "3-thermal"
        },
        {
          "yaw": 1.2711462798148538,
          "pitch": 0.09871580371920885,
          "rotation": 0,
          "target": "9-traffic-generator"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-radio",
      "name": "Radio",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.686258772562365,
        "pitch": 0.43555608622894226,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -0.22388187324675535,
          "pitch": 0.12729590567349547,
          "rotation": 0,
          "target": "4-wireless"
        },
        {
          "yaw": -0.7023665488211499,
          "pitch": 0.3024380348522122,
          "rotation": 0,
          "target": "6-radio2"
        },
        {
          "yaw": -0.6314328685778889,
          "pitch": 0.16276629715091318,
          "rotation": 0,
          "target": "7-radio3"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.058399129571672,
          "pitch": 0.21500130864802713,
          "title": "Radio Test",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-radio2",
      "name": "Radio2",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.719696714842607,
        "pitch": 0.3007431938350713,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 0.9926576981010804,
          "pitch": 0.1486403505032179,
          "rotation": 0,
          "target": "5-radio"
        },
        {
          "yaw": -1.1937246843900677,
          "pitch": 0.0717050521610485,
          "rotation": 0,
          "target": "4-wireless"
        },
        {
          "yaw": -2.0664004965801546,
          "pitch": 0.5003474447553913,
          "rotation": 0,
          "target": "7-radio3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-radio3",
      "name": "Radio3",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.9812641396187143,
        "pitch": 0.32042015794891654,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 0.789440999333376,
          "pitch": 0.0705002443799998,
          "rotation": 0,
          "target": "5-radio"
        },
        {
          "yaw": 0.8631935739159609,
          "pitch": 0.2639321758169366,
          "rotation": 0,
          "target": "6-radio2"
        },
        {
          "yaw": -0.9758722311311043,
          "pitch": 0.09601888616084331,
          "rotation": 0,
          "target": "4-wireless"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-radio4",
      "name": "Radio4",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8630493200851284,
        "pitch": 0.43534557090391246,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 1.199656967264172,
          "pitch": 0.24378625973885448,
          "rotation": 0,
          "target": "7-radio3"
        },
        {
          "yaw": -2.3123747714883294,
          "pitch": 0.23904507495749172,
          "rotation": 0,
          "target": "4-wireless"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-traffic-generator",
      "name": "Traffic Generator",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1083823420179346,
        "pitch": 0.3315881294143246,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -0.5539824990779465,
          "pitch": 0.06517455687769491,
          "rotation": 0,
          "target": "4-wireless"
        },
        {
          "yaw": 0.6646212830379383,
          "pitch": 0.03472150274645003,
          "rotation": 0,
          "target": "10-largethermal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-largethermal",
      "name": "LargeThermal",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 2.8155593798977288,
        "pitch": 0.1174610628258943,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -0.9014821328082441,
          "pitch": 0.16942269699130463,
          "rotation": 0,
          "target": "9-traffic-generator"
        },
        {
          "yaw": 3.0154395136483823,
          "pitch": 0.22063990228411257,
          "rotation": 0,
          "target": "11-highpower"
        },
        {
          "yaw": -2.6298847980256426,
          "pitch": 0.19303891161458964,
          "rotation": 0,
          "target": "12-415v"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-highpower",
      "name": "HighPower",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.686150585115179,
        "pitch": 0.2134160140128074,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -1.6722148254697498,
          "pitch": 0.24288412575513618,
          "rotation": 0,
          "target": "12-415v"
        },
        {
          "yaw": -2.8235016851803394,
          "pitch": 0.14401366528214865,
          "rotation": 0,
          "target": "15-60kva"
        },
        {
          "yaw": -2.1420740779842866,
          "pitch": 0.19169302015345657,
          "rotation": 0,
          "target": "13-75kva"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-415v",
      "name": "415V",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.089121714464655,
        "pitch": 0.15076024211820638,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 1.750564856049916,
          "pitch": 0.1507047015959717,
          "rotation": 0,
          "target": "15-60kva"
        },
        {
          "yaw": 0.9217528328813387,
          "pitch": 0.18756414934665422,
          "rotation": 0,
          "target": "13-75kva"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-75kva",
      "name": "75kVA",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.1259113830616645,
        "pitch": 0.0922049929533344,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -1.8142252224472166,
          "pitch": 0.15565924730177194,
          "rotation": 0,
          "target": "15-60kva"
        },
        {
          "yaw": 1.5977436423030067,
          "pitch": 0.24912179663559897,
          "rotation": 0,
          "target": "12-415v"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-415v-2",
      "name": "415V-2",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.0698474738412056,
        "pitch": 0.11962129261532084,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -2.1390897548210965,
          "pitch": 0.0932047167169312,
          "rotation": 0,
          "target": "2-bigaltitude"
        },
        {
          "yaw": -1.652154123076155,
          "pitch": 0.0329930730411192,
          "rotation": 0,
          "target": "0-envlab"
        },
        {
          "yaw": 0.01776350043034647,
          "pitch": -0.025388365041823846,
          "rotation": 0,
          "target": "4-wireless"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-60kva",
      "name": "60kVA",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": 3.071388373313491,
        "pitch": 0.26443285841385133,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 1.8220643361724944,
          "pitch": 0.0005941430296747541,
          "rotation": 0,
          "target": "16-ota"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-ota",
      "name": "OTA",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.980535662022927,
        "pitch": 0.3486963947821238,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 0.5784299570831397,
          "pitch": -0.07809318696684286,
          "rotation": 0,
          "target": "20-acoustic-control"
        },
        {
          "yaw": -0.08829152564900333,
          "pitch": -0.019575800321002035,
          "rotation": 0,
          "target": "15-60kva"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-acoustic",
      "name": "Acoustic",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -2.653051573789133,
        "pitch": 0.2582314027092849,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": -0.09680956363109239,
          "pitch": -0.0571601726780635,
          "rotation": 0,
          "target": "20-acoustic-control"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-60kw-2",
      "name": "60kW-2",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.1387366474246043,
        "pitch": 0.11597070465221293,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 2.6367868860099275,
          "pitch": 0.18322814465635417,
          "rotation": 0,
          "target": "19-415v-3"
        },
        {
          "yaw": 1.164876725579946,
          "pitch": 0.09518961524592306,
          "rotation": 0,
          "target": "20-acoustic-control"
        },
        {
          "yaw": 0.8821057831468284,
          "pitch": 0.2086606271206719,
          "rotation": 0,
          "target": "17-acoustic"
        },
        {
          "yaw": 1.617103355666507,
          "pitch": 0.02898977157117244,
          "rotation": 0,
          "target": "16-ota"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-415v-3",
      "name": "415V-3",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -3.0772157057574834,
        "pitch": 0.17737337442315848,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 1.5841521770193143,
          "pitch": 0.06458272349563643,
          "rotation": 0,
          "target": "20-acoustic-control"
        },
        {
          "yaw": 0.7908430947017937,
          "pitch": 0.12891404561339215,
          "rotation": 0,
          "target": "17-acoustic"
        },
        {
          "yaw": -0.3954207532872154,
          "pitch": 0.07805021100387144,
          "rotation": 0,
          "target": "18-60kw-2"
        },
        {
          "yaw": 1.8316022970575343,
          "pitch": 0.0659503528586125,
          "rotation": 0,
          "target": "16-ota"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-acoustic-control",
      "name": "Acoustic-Control",
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
      "faceSize": 1520,
      "initialViewParameters": {
        "yaw": -1.1428506608513533,
        "pitch": 0.18542985258468647,
        "fov": 1.5549163056104027
      },
      "linkHotspots": [
        {
          "yaw": 2.90825077904302,
          "pitch": 0.15612958432081214,
          "rotation": 0,
          "target": "19-415v-3"
        },
        {
          "yaw": -2.867033264756536,
          "pitch": 0.10360287120299283,
          "rotation": 0,
          "target": "18-60kw-2"
        },
        {
          "yaw": -2.152232739334803,
          "pitch": 0.21509870060250336,
          "rotation": 0,
          "target": "17-acoustic"
        },
        {
          "yaw": 1.272881873024506,
          "pitch": 0.20305713295709715,
          "rotation": 0,
          "target": "16-ota"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
