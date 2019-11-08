var wms_layers = [];

var format_North_America_0 = new ol.format.GeoJSON();
var features_North_America_0 = format_North_America_0.readFeatures(json_North_America_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_North_America_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_North_America_0.addFeatures(features_North_America_0);
var lyr_North_America_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_North_America_0, 
                style: style_North_America_0,
                interactive: true,
                title: '<img src="styles/legend/North_America_0.png" /> North_America'
            });
var format_states_1 = new ol.format.GeoJSON();
var features_states_1 = format_states_1.readFeatures(json_states_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_states_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_states_1.addFeatures(features_states_1);
var lyr_states_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_states_1, 
                style: style_states_1,
                interactive: true,
                title: '<img src="styles/legend/states_1.png" /> states'
            });
var format_BottomOxygenmgL_2 = new ol.format.GeoJSON();
var features_BottomOxygenmgL_2 = format_BottomOxygenmgL_2.readFeatures(json_BottomOxygenmgL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BottomOxygenmgL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BottomOxygenmgL_2.addFeatures(features_BottomOxygenmgL_2);
var lyr_BottomOxygenmgL_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BottomOxygenmgL_2, 
                style: style_BottomOxygenmgL_2,
                interactive: true,
    title: 'Bottom Oxygen (mg/L)<br />\
    <img src="styles/legend/BottomOxygenmgL_2_0.png" /> 0.5-1<br />\
    <img src="styles/legend/BottomOxygenmgL_2_1.png" /> 0-0.5<br />\
    <img src="styles/legend/BottomOxygenmgL_2_2.png" /> 1.5-2<br />\
    <img src="styles/legend/BottomOxygenmgL_2_3.png" /> 1-1.5<br />\
    <img src="styles/legend/BottomOxygenmgL_2_4.png" /> 2.5-3<br />\
    <img src="styles/legend/BottomOxygenmgL_2_5.png" /> 2-2.5<br />\
    <img src="styles/legend/BottomOxygenmgL_2_6.png" /> 3.5-4<br />\
    <img src="styles/legend/BottomOxygenmgL_2_7.png" /> 3-3.5<br />\
    <img src="styles/legend/BottomOxygenmgL_2_8.png" /> 4.5-5<br />\
    <img src="styles/legend/BottomOxygenmgL_2_9.png" /> 4-4.5<br />\
    <img src="styles/legend/BottomOxygenmgL_2_10.png" /> 5.5-6<br />\
    <img src="styles/legend/BottomOxygenmgL_2_11.png" /> 5-5.5<br />'
        });
var format_Euchemaphosphorous_3 = new ol.format.GeoJSON();
var features_Euchemaphosphorous_3 = format_Euchemaphosphorous_3.readFeatures(json_Euchemaphosphorous_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Euchemaphosphorous_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Euchemaphosphorous_3.addFeatures(features_Euchemaphosphorous_3);
var lyr_Euchemaphosphorous_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Euchemaphosphorous_3, 
                style: style_Euchemaphosphorous_3,
                interactive: true,
                title: '<img src="styles/legend/Euchemaphosphorous_3.png" /> Euchema phosphorous'
            });
var format_Euchemanitrogen_4 = new ol.format.GeoJSON();
var features_Euchemanitrogen_4 = format_Euchemanitrogen_4.readFeatures(json_Euchemanitrogen_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Euchemanitrogen_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Euchemanitrogen_4.addFeatures(features_Euchemanitrogen_4);
var lyr_Euchemanitrogen_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Euchemanitrogen_4, 
                style: style_Euchemanitrogen_4,
                interactive: true,
                title: '<img src="styles/legend/Euchemanitrogen_4.png" /> Euchema nitrogen'
            });
var format_Sargassumphosphorus_5 = new ol.format.GeoJSON();
var features_Sargassumphosphorus_5 = format_Sargassumphosphorus_5.readFeatures(json_Sargassumphosphorus_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sargassumphosphorus_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sargassumphosphorus_5.addFeatures(features_Sargassumphosphorus_5);
var lyr_Sargassumphosphorus_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sargassumphosphorus_5, 
                style: style_Sargassumphosphorus_5,
                interactive: true,
                title: '<img src="styles/legend/Sargassumphosphorus_5.png" /> Sargassum phosphorus'
            });
var format_Sargassumnitrogen_6 = new ol.format.GeoJSON();
var features_Sargassumnitrogen_6 = format_Sargassumnitrogen_6.readFeatures(json_Sargassumnitrogen_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sargassumnitrogen_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sargassumnitrogen_6.addFeatures(features_Sargassumnitrogen_6);
var lyr_Sargassumnitrogen_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sargassumnitrogen_6, 
                style: style_Sargassumnitrogen_6,
                interactive: true,
                title: '<img src="styles/legend/Sargassumnitrogen_6.png" /> Sargassum nitrogen'
            });

lyr_North_America_0.setVisible(true);lyr_states_1.setVisible(true);lyr_BottomOxygenmgL_2.setVisible(true);lyr_Euchemaphosphorous_3.setVisible(true);lyr_Euchemanitrogen_4.setVisible(true);lyr_Sargassumphosphorus_5.setVisible(true);lyr_Sargassumnitrogen_6.setVisible(true);
var layersList = [lyr_North_America_0,lyr_states_1,lyr_BottomOxygenmgL_2,lyr_Euchemaphosphorous_3,lyr_Euchemanitrogen_4,lyr_Sargassumphosphorus_5,lyr_Sargassumnitrogen_6];
lyr_North_America_0.set('fieldAliases', {'NAME': 'NAME', 'CC': 'CC', 'REGION': 'REGION', 'iso_alpha2': 'iso_alpha2', 'iso_alpha3': 'iso_alpha3', 'iso_num': 'iso_num', 'tld': 'tld', });
lyr_states_1.set('fieldAliases', {'STATE_NAME': 'STATE_NAME', 'DRAWSEQ': 'DRAWSEQ', 'STATE_FIPS': 'STATE_FIPS', 'SUB_REGION': 'SUB_REGION', 'STATE_ABBR': 'STATE_ABBR', });
lyr_BottomOxygenmgL_2.set('fieldAliases', {'SHIP': 'SHIP', 'BEGIN': 'BEGIN', 'END': 'END', 'CRUISE': 'CRUISE', 'MIN_02': 'MIN_02', 'MAX_02': 'MAX_02', 'RANGE_02': 'RANGE_02', });
lyr_Euchemaphosphorous_3.set('fieldAliases', {'id': 'id', });
lyr_Euchemanitrogen_4.set('fieldAliases', {'id': 'id', });
lyr_Sargassumphosphorus_5.set('fieldAliases', {'id': 'id', });
lyr_Sargassumnitrogen_6.set('fieldAliases', {'id': 'id', });
lyr_North_America_0.set('fieldImages', {'NAME': 'TextEdit', 'CC': 'TextEdit', 'REGION': 'TextEdit', 'iso_alpha2': 'TextEdit', 'iso_alpha3': 'TextEdit', 'iso_num': 'TextEdit', 'tld': 'TextEdit', });
lyr_states_1.set('fieldImages', {'STATE_NAME': 'TextEdit', 'DRAWSEQ': 'Range', 'STATE_FIPS': 'TextEdit', 'SUB_REGION': 'TextEdit', 'STATE_ABBR': 'TextEdit', });
lyr_BottomOxygenmgL_2.set('fieldImages', {'SHIP': 'TextEdit', 'BEGIN': 'TextEdit', 'END': 'TextEdit', 'CRUISE': 'TextEdit', 'MIN_02': 'TextEdit', 'MAX_02': 'TextEdit', 'RANGE_02': 'TextEdit', });
lyr_Euchemaphosphorous_3.set('fieldImages', {'id': 'TextEdit', });
lyr_Euchemanitrogen_4.set('fieldImages', {'id': 'TextEdit', });
lyr_Sargassumphosphorus_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Sargassumnitrogen_6.set('fieldImages', {'id': 'TextEdit', });
lyr_North_America_0.set('fieldLabels', {'NAME': 'no label', 'CC': 'no label', 'REGION': 'no label', 'iso_alpha2': 'no label', 'iso_alpha3': 'no label', 'iso_num': 'no label', 'tld': 'no label', });
lyr_states_1.set('fieldLabels', {'STATE_NAME': 'no label', 'DRAWSEQ': 'no label', 'STATE_FIPS': 'no label', 'SUB_REGION': 'no label', 'STATE_ABBR': 'no label', });
lyr_BottomOxygenmgL_2.set('fieldLabels', {'SHIP': 'no label', 'BEGIN': 'no label', 'END': 'no label', 'CRUISE': 'no label', 'MIN_02': 'no label', 'MAX_02': 'no label', 'RANGE_02': 'inline label', });
lyr_Euchemaphosphorous_3.set('fieldLabels', {'id': 'no label', });
lyr_Euchemanitrogen_4.set('fieldLabels', {'id': 'no label', });
lyr_Sargassumphosphorus_5.set('fieldLabels', {'id': 'no label', });
lyr_Sargassumnitrogen_6.set('fieldLabels', {'id': 'inline label', });
lyr_Sargassumnitrogen_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});