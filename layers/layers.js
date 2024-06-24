var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_District_2 = new ol.format.GeoJSON();
var features_District_2 = format_District_2.readFeatures(json_District_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District_2.addFeatures(features_District_2);
var lyr_District_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_District_2, 
                style: style_District_2,
                popuplayertitle: "District",
                interactive: true,
                title: '<img src="styles/legend/District_2.png" /> District'
            });
var format_Main_Road_3 = new ol.format.GeoJSON();
var features_Main_Road_3 = format_Main_Road_3.readFeatures(json_Main_Road_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Main_Road_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Main_Road_3.addFeatures(features_Main_Road_3);
var lyr_Main_Road_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Main_Road_3, 
                style: style_Main_Road_3,
                popuplayertitle: "Main_Road",
                interactive: true,
                title: '<img src="styles/legend/Main_Road_3.png" /> Main_Road'
            });

lyr_OSMStandard_0.setVisible(false);lyr_GoogleSatellite_1.setVisible(true);lyr_District_2.setVisible(true);lyr_Main_Road_3.setVisible(false);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_District_2,lyr_Main_Road_3];
lyr_District_2.set('fieldAliases', {'District Name': 'District Name', });
lyr_Main_Road_3.set('fieldAliases', {'Road Name': 'Road Name', 'Road No.': 'Road No.', 'TL_Ye_crea': 'TL_Ye_crea', 'TL_Cd_GFCO': 'TL_Cd_GFCO', 'SHAPE_Leng': 'SHAPE_Leng', 'Type': 'Type', 'Length': 'Length', });
lyr_District_2.set('fieldImages', {'District Name': 'TextEdit', });
lyr_Main_Road_3.set('fieldImages', {'Road Name': 'TextEdit', 'Road No.': 'TextEdit', 'TL_Ye_crea': 'TextEdit', 'TL_Cd_GFCO': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'Type': 'TextEdit', 'Length': 'TextEdit', });
lyr_District_2.set('fieldLabels', {'District Name': 'no label', });
lyr_Main_Road_3.set('fieldLabels', {'Road Name': 'header label - always visible', 'Road No.': 'header label - always visible', 'TL_Ye_crea': 'no label', 'TL_Cd_GFCO': 'no label', 'SHAPE_Leng': 'no label', 'Type': 'no label', 'Length': 'no label', });
lyr_Main_Road_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
// Define the extent of Sri Lanka
var sriLankaExtent = ol.proj.transformExtent([79.5213, 5.9195, 81.8794, 9.835], 'EPSG:4326', 'EPSG:3857');

// Fit the map view to the extent of Sri Lanka
map.getView().fit(sriLankaExtent, map.getSize());