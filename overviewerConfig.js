var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "world - overworld",
        "world - end"
    ],
    "map": {
        "debug": true,
        "cacheTag": "1593510299",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Overworld",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "normal",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - overworld",
            "last_rendertime": 1593508602,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                4,
                0
            ],
            "minZoom": 0,
            "spawn": [
                0,
                4,
                0
            ],
            "north_direction": 0
        },
        {
            "name": "End",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "end",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "world - end",
            "last_rendertime": 1593423973,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                4,
                0
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
