ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32718").setExtent([354383.787606, 8696605.840535, 1246155.876452, 9249014.343773]);
var wms_layers = [];

var format_UCAYALI_0 = new ol.format.GeoJSON();
var features_UCAYALI_0 = format_UCAYALI_0.readFeatures(json_UCAYALI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_UCAYALI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCAYALI_0.addFeatures(features_UCAYALI_0);
var lyr_UCAYALI_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UCAYALI_0, 
                style: style_UCAYALI_0,
                popuplayertitle: 'UCAYALI',
                interactive: true,
                title: '<img src="styles/legend/UCAYALI_0.png" /> UCAYALI'
            });

        var lyr_EsriTopographic_1 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Geologia_ucayali_2 = new ol.format.GeoJSON();
var features_Geologia_ucayali_2 = format_Geologia_ucayali_2.readFeatures(json_Geologia_ucayali_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32718'});
var jsonSource_Geologia_ucayali_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Geologia_ucayali_2.addFeatures(features_Geologia_ucayali_2);
var lyr_Geologia_ucayali_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Geologia_ucayali_2, 
                style: style_Geologia_ucayali_2,
                popuplayertitle: 'Geologia_ucayali',
                interactive: true,
    title: 'Geologia_ucayali<br />\
    <img src="styles/legend/Geologia_ucayali_2_0.png" /> C_poblados<br />\
    <img src="styles/legend/Geologia_ucayali_2_1.png" /> Cak-e<br />\
    <img src="styles/legend/Geologia_ucayali_2_2.png" /> Caq-e<br />\
    <img src="styles/legend/Geologia_ucayali_2_3.png" /> Cat-e<br />\
    <img src="styles/legend/Geologia_ucayali_2_4.png" /> Catq-e<br />\
    <img src="styles/legend/Geologia_ucayali_2_5.png" /> Cbk-d<br />\
    <img src="styles/legend/Geologia_ucayali_2_6.png" /> Cbq-d<br />\
    <img src="styles/legend/Geologia_ucayali_2_7.png" /> Cbt-d<br />\
    <img src="styles/legend/Geologia_ucayali_2_8.png" /> Cbtq-d<br />\
    <img src="styles/legend/Geologia_ucayali_2_9.png" /> Cochas<br />\
    <img src="styles/legend/Geologia_ucayali_2_10.png" /> Islas<br />\
    <img src="styles/legend/Geologia_ucayali_2_11.png" /> Lagunas<br />\
    <img src="styles/legend/Geologia_ucayali_2_12.png" /> Lq-c<br />\
    <img src="styles/legend/Geologia_ucayali_2_13.png" /> Lt-c<br />\
    <img src="styles/legend/Geologia_ucayali_2_14.png" /> Ltq-c<br />\
    <img src="styles/legend/Geologia_ucayali_2_15.png" /> Rios polyg<br />\
    <img src="styles/legend/Geologia_ucayali_2_16.png" /> Ta-a<br />\
    <img src="styles/legend/Geologia_ucayali_2_17.png" /> Tad-b<br />\
    <img src="styles/legend/Geologia_ucayali_2_18.png" /> Tb-a<br />\
    <img src="styles/legend/Geologia_ucayali_2_19.png" /> Tba-a<br />\
    <img src="styles/legend/Geologia_ucayali_2_20.png" /> Tbi-a<br />\
    <img src="styles/legend/Geologia_ucayali_2_21.png" /> Tm-a<br />\
    <img src="styles/legend/Geologia_ucayali_2_22.png" /> Tma-a<br />\
    <img src="styles/legend/Geologia_ucayali_2_23.png" /> VsA1-e<br />\
    <img src="styles/legend/Geologia_ucayali_2_24.png" /> VsA2-d<br />\
    <img src="styles/legend/Geologia_ucayali_2_25.png" /> VsA2-e<br />' });

lyr_UCAYALI_0.setVisible(true);lyr_EsriTopographic_1.setVisible(true);lyr_Geologia_ucayali_2.setVisible(true);
var layersList = [lyr_UCAYALI_0,lyr_EsriTopographic_1,lyr_Geologia_ucayali_2];
lyr_UCAYALI_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'Lista': 'Lista', });
lyr_Geologia_ucayali_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SIMBOLO_': 'SIMBOLO_', 'REGION': 'REGION', 'FORMAS_DEL': 'FORMAS_DEL', 'Area': 'Area', 'Perimetro': 'Perimetro', });
lyr_UCAYALI_0.set('fieldImages', {'ID_0': 'Hidden', 'ISO': 'Hidden', 'NAME_0': 'Hidden', 'ID_1': 'Hidden', 'NAME_1': 'TextEdit', 'Lista': 'TextEdit', });
lyr_Geologia_ucayali_2.set('fieldImages', {'OBJECTID': 'Hidden', 'SIMBOLO_': 'TextEdit', 'REGION': 'TextEdit', 'FORMAS_DEL': 'Hidden', 'Area': 'TextEdit', 'Perimetro': 'TextEdit', });
lyr_UCAYALI_0.set('fieldLabels', {'NAME_1': 'inline label - visible with data', 'Lista': 'no label', });
lyr_Geologia_ucayali_2.set('fieldLabels', {'SIMBOLO_': 'inline label - visible with data', 'REGION': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Perimetro': 'inline label - visible with data', });
lyr_Geologia_ucayali_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});