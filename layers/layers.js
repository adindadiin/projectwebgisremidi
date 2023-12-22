var wms_layers = [];


        var lyr_ESRITopo_0 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RUMAHSAKIT_PT_25K_1 = new ol.format.GeoJSON();
var features_RUMAHSAKIT_PT_25K_1 = format_RUMAHSAKIT_PT_25K_1.readFeatures(json_RUMAHSAKIT_PT_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHSAKIT_PT_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHSAKIT_PT_25K_1.addFeatures(features_RUMAHSAKIT_PT_25K_1);
var lyr_RUMAHSAKIT_PT_25K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAHSAKIT_PT_25K_1, 
                style: style_RUMAHSAKIT_PT_25K_1,
                interactive: true,
                title: '<img src="styles/legend/RUMAHSAKIT_PT_25K_1.png" /> RUMAHSAKIT_PT_25K'
            });
var format_AdministrasiKotaKediri_2 = new ol.format.GeoJSON();
var features_AdministrasiKotaKediri_2 = format_AdministrasiKotaKediri_2.readFeatures(json_AdministrasiKotaKediri_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdministrasiKotaKediri_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdministrasiKotaKediri_2.addFeatures(features_AdministrasiKotaKediri_2);
var lyr_AdministrasiKotaKediri_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AdministrasiKotaKediri_2, 
                style: style_AdministrasiKotaKediri_2,
                interactive: true,
                title: '<img src="styles/legend/AdministrasiKotaKediri_2.png" /> Administrasi Kota Kediri'
            });
var format_JaringanJalan_3 = new ol.format.GeoJSON();
var features_JaringanJalan_3 = format_JaringanJalan_3.readFeatures(json_JaringanJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_3.addFeatures(features_JaringanJalan_3);
var lyr_JaringanJalan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JaringanJalan_3, 
                style: style_JaringanJalan_3,
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_3.png" /> Jaringan Jalan'
            });
var format_Servicearea3000m_4 = new ol.format.GeoJSON();
var features_Servicearea3000m_4 = format_Servicearea3000m_4.readFeatures(json_Servicearea3000m_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea3000m_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea3000m_4.addFeatures(features_Servicearea3000m_4);
var lyr_Servicearea3000m_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearea3000m_4, 
                style: style_Servicearea3000m_4,
                interactive: true,
                title: '<img src="styles/legend/Servicearea3000m_4.png" /> Service area 3000m'
            });
var format_Servicearea2000m_5 = new ol.format.GeoJSON();
var features_Servicearea2000m_5 = format_Servicearea2000m_5.readFeatures(json_Servicearea2000m_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea2000m_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea2000m_5.addFeatures(features_Servicearea2000m_5);
var lyr_Servicearea2000m_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearea2000m_5, 
                style: style_Servicearea2000m_5,
                interactive: true,
                title: '<img src="styles/legend/Servicearea2000m_5.png" /> Service area 2000m'
            });
var format_Servicearea1500m_6 = new ol.format.GeoJSON();
var features_Servicearea1500m_6 = format_Servicearea1500m_6.readFeatures(json_Servicearea1500m_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea1500m_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea1500m_6.addFeatures(features_Servicearea1500m_6);
var lyr_Servicearea1500m_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearea1500m_6, 
                style: style_Servicearea1500m_6,
                interactive: true,
                title: '<img src="styles/legend/Servicearea1500m_6.png" /> Service area 1500m'
            });
var format_Servicearea1000m_7 = new ol.format.GeoJSON();
var features_Servicearea1000m_7 = format_Servicearea1000m_7.readFeatures(json_Servicearea1000m_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea1000m_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea1000m_7.addFeatures(features_Servicearea1000m_7);
var lyr_Servicearea1000m_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearea1000m_7, 
                style: style_Servicearea1000m_7,
                interactive: true,
                title: '<img src="styles/legend/Servicearea1000m_7.png" /> Service area 1000m'
            });
var format_Servicearea500m_8 = new ol.format.GeoJSON();
var features_Servicearea500m_8 = format_Servicearea500m_8.readFeatures(json_Servicearea500m_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Servicearea500m_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Servicearea500m_8.addFeatures(features_Servicearea500m_8);
var lyr_Servicearea500m_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Servicearea500m_8, 
                style: style_Servicearea500m_8,
                interactive: true,
                title: '<img src="styles/legend/Servicearea500m_8.png" /> Service area 500m'
            });
var format_RumahSakit_9 = new ol.format.GeoJSON();
var features_RumahSakit_9 = format_RumahSakit_9.readFeatures(json_RumahSakit_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahSakit_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahSakit_9.addFeatures(features_RumahSakit_9);
var lyr_RumahSakit_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RumahSakit_9, 
                style: style_RumahSakit_9,
                interactive: true,
                title: '<img src="styles/legend/RumahSakit_9.png" /> Rumah Sakit'
            });

lyr_ESRITopo_0.setVisible(true);lyr_RUMAHSAKIT_PT_25K_1.setVisible(true);lyr_AdministrasiKotaKediri_2.setVisible(true);lyr_JaringanJalan_3.setVisible(true);lyr_Servicearea3000m_4.setVisible(true);lyr_Servicearea2000m_5.setVisible(true);lyr_Servicearea1500m_6.setVisible(true);lyr_Servicearea1000m_7.setVisible(true);lyr_Servicearea500m_8.setVisible(true);lyr_RumahSakit_9.setVisible(true);
var layersList = [lyr_ESRITopo_0,lyr_RUMAHSAKIT_PT_25K_1,lyr_AdministrasiKotaKediri_2,lyr_JaringanJalan_3,lyr_Servicearea3000m_4,lyr_Servicearea2000m_5,lyr_Servicearea1500m_6,lyr_Servicearea1000m_7,lyr_Servicearea500m_8,lyr_RumahSakit_9];
lyr_RUMAHSAKIT_PT_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_AdministrasiKotaKediri_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JaringanJalan_3.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Servicearea3000m_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'type': 'type', 'start': 'start', });
lyr_Servicearea2000m_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'type': 'type', 'start': 'start', });
lyr_Servicearea1500m_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'type': 'type', 'start': 'start', });
lyr_Servicearea1000m_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'type': 'type', 'start': 'start', });
lyr_Servicearea500m_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', 'type': 'type', 'start': 'start', });
lyr_RumahSakit_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'TIPRST': 'TIPRST', 'JPLYRS': 'JPLYRS', 'ALAMAT': 'ALAMAT', });
lyr_RUMAHSAKIT_PT_25K_1.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'REMARK': '', 'METADATA': '', 'SRS_ID': '', 'TIPRST': '', 'JPLYRS': '', 'ALAMAT': '', });
lyr_AdministrasiKotaKediri_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_JaringanJalan_3.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'TextEdit', 'MATRJL': 'TextEdit', 'FGSRJL': 'TextEdit', 'UTKRJL': 'TextEdit', 'TOLRJL': 'TextEdit', 'WLYRJL': 'TextEdit', 'AUTRJL': 'TextEdit', 'KLSRJL': 'TextEdit', 'SPCRJL': 'TextEdit', 'JPARJL': 'TextEdit', 'ARHRJL': 'TextEdit', 'STARJL': 'TextEdit', 'KLLRJL': 'TextEdit', 'MEDRJL': 'TextEdit', 'LOCRJL': 'TextEdit', 'JARRJL': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Servicearea3000m_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Servicearea2000m_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Servicearea1500m_6.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Servicearea1000m_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_Servicearea500m_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', 'type': 'TextEdit', 'start': 'TextEdit', });
lyr_RumahSakit_9.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'TIPRST': 'TextEdit', 'JPLYRS': 'TextEdit', 'ALAMAT': 'TextEdit', });
lyr_RUMAHSAKIT_PT_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_AdministrasiKotaKediri_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JaringanJalan_3.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Servicearea3000m_4.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea2000m_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea1500m_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea1000m_7.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_Servicearea500m_8.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', 'type': 'no label', 'start': 'no label', });
lyr_RumahSakit_9.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'TIPRST': 'no label', 'JPLYRS': 'no label', 'ALAMAT': 'no label', });
lyr_RumahSakit_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});