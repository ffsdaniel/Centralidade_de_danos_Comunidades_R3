ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31983").setExtent([480887.950174, 7778896.900998, 646024.637959, 7896582.185526]);
var wms_layers = [];


        var lyr_ESRIShadedRelief_0 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MunicpiosdaRegio3_2 = new ol.format.GeoJSON();
var features_MunicpiosdaRegio3_2 = format_MunicpiosdaRegio3_2.readFeatures(json_MunicpiosdaRegio3_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_MunicpiosdaRegio3_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicpiosdaRegio3_2.addFeatures(features_MunicpiosdaRegio3_2);
var lyr_MunicpiosdaRegio3_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicpiosdaRegio3_2, 
                style: style_MunicpiosdaRegio3_2,
                popuplayertitle: 'Municípios da Região 3',
                interactive: true,
                title: '<img src="styles/legend/MunicpiosdaRegio3_2.png" /> Municípios da Região 3'
            });
var format_Categorias_Danos_populacao_distanciasarquivo_de_sada_3 = new ol.format.GeoJSON();
var features_Categorias_Danos_populacao_distanciasarquivo_de_sada_3 = format_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.readFeatures(json_Categorias_Danos_populacao_distanciasarquivo_de_sada_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_Categorias_Danos_populacao_distanciasarquivo_de_sada_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.addFeatures(features_Categorias_Danos_populacao_distanciasarquivo_de_sada_3);
var lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Categorias_Danos_populacao_distanciasarquivo_de_sada_3, 
                style: style_Categorias_Danos_populacao_distanciasarquivo_de_sada_3,
                popuplayertitle: 'Categorias_Danos_populacao_distancias — arquivo_de_sada',
                interactive: true,
                title: '<img src="styles/legend/Categorias_Danos_populacao_distanciasarquivo_de_sada_3.png" /> Categorias_Danos_populacao_distancias — arquivo_de_sada'
            });
var format_RioParaopeba_4 = new ol.format.GeoJSON();
var features_RioParaopeba_4 = format_RioParaopeba_4.readFeatures(json_RioParaopeba_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31983'});
var jsonSource_RioParaopeba_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RioParaopeba_4.addFeatures(features_RioParaopeba_4);
var lyr_RioParaopeba_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RioParaopeba_4, 
                style: style_RioParaopeba_4,
                popuplayertitle: 'Rio Paraopeba',
                interactive: false,
                title: '<img src="styles/legend/RioParaopeba_4.png" /> Rio Paraopeba'
            });

lyr_ESRIShadedRelief_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_MunicpiosdaRegio3_2.setVisible(true);lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.setVisible(true);lyr_RioParaopeba_4.setVisible(true);
var layersList = [lyr_ESRIShadedRelief_0,lyr_GoogleSatellite_1,lyr_MunicpiosdaRegio3_2,lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3,lyr_RioParaopeba_4];
lyr_MunicpiosdaRegio3_2.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'CD_RGI': 'CD_RGI', 'NM_RGI': 'NM_RGI', 'CD_RGINT': 'CD_RGINT', 'NM_RGINT': 'NM_RGINT', 'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'CD_REGIA': 'CD_REGIA', 'NM_REGIA': 'NM_REGIA', 'SIGLA_RG': 'SIGLA_RG', 'CD_CONCU': 'CD_CONCU', 'NM_CONCU': 'NM_CONCU', 'AREA_KM2': 'AREA_KM2', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.set('fieldAliases', {'fid': 'fid', 'Município': 'Município', 'Comunidade': 'Comunidade', 'SEGMENTO': 'SEGMENTO', 'ID_C': 'ID_C', 'Area(m)': 'Area(m)', 'Distância do rompimento': 'Distância do rompimento', 'Distância do rio Paraopeba/Três Marias': 'Distância do rio Paraopeba/Três Marias', 'População da comunidade': 'População da comunidade', 'Sociabilidade: danos que prejudicam as relações interpessoais, familiares e comunitárias ': 'Sociabilidade: danos que prejudicam as relações interpessoais, familiares e comunitárias ', 'Patrimônio Cultural e Cultura: Danos que afetam o patrimônio e as manifestações culturais locais': 'Patrimônio Cultural e Cultura: Danos que afetam o patrimônio e as manifestações culturais locais', 'Lazer: Danos que reduzem o acesso ao lazer': 'Lazer: Danos que reduzem o acesso ao lazer', 'Educação: Danos que dificultam o acesso à educação e prejudicam as condições de ensino': 'Educação: Danos que dificultam o acesso à educação e prejudicam as condições de ensino', 'Mobilidade: danos que impactam o transporte e circulação': 'Mobilidade: danos que impactam o transporte e circulação', 'Modos de vida: danos aos projetos,  modos e qualidade de vida': 'Modos de vida: danos aos projetos,  modos e qualidade de vida', 'Infraestrutura: Danos que impactam negativamento o acesso e uso de infraestruturas básicas': 'Infraestrutura: Danos que impactam negativamento o acesso e uso de infraestruturas básicas', 'Saúde: danos que dificultam o tratamento e agravam as condições de saúde física e mental ': 'Saúde: danos que dificultam o tratamento e agravam as condições de saúde física e mental ', 'Água: Danos associados à perda ou diminuição do acesso água': 'Água: Danos associados à perda ou diminuição do acesso água', 'Alimentação: Danos associados à redução da oferta ou da produção de alimentos': 'Alimentação: Danos associados à redução da oferta ou da produção de alimentos', 'Economia tradicional: danos aos bens, posses e atividades econômicas tradicionais': 'Economia tradicional: danos aos bens, posses e atividades econômicas tradicionais', 'Socioassistência: danos que agravam vunerabilidades e dificultam o acesso à serviços e direitos socioassistenciais': 'Socioassistência: danos que agravam vunerabilidades e dificultam o acesso à serviços e direitos socioassistenciais', 'Turismo: danos que reduzem as oportunidades e benefícios do turismo': 'Turismo: danos que reduzem as oportunidades e benefícios do turismo', 'Trabalho: danos que prejudicam as oportunidades e condições de trabalho': 'Trabalho: danos que prejudicam as oportunidades e condições de trabalho', 'Produção: danos associados à perda ou restrição da produção agrícola, agropecuária e extrativista': 'Produção: danos associados à perda ou restrição da produção agrícola, agropecuária e extrativista', 'Atividade Econômica: Danos que impactam negativamente o comércio e a economia local': 'Atividade Econômica: Danos que impactam negativamente o comércio e a economia local', 'Moradia: Danos que reduzem e dificultam as condições de moradia e habitabilidade de comunidades urbanas e rurais': 'Moradia: Danos que reduzem e dificultam as condições de moradia e habitabilidade de comunidades urbanas e rurais', });
lyr_RioParaopeba_4.set('fieldAliases', {'Source': 'Source', 'GEOCODIGO': 'GEOCODIGO', 'MUNICIPIO': 'MUNICIPIO', 'UF': 'UF', 'CD_UF': 'CD_UF', 'HIDRO': 'HIDRO', 'AREA_HA': 'AREA_HA', });
lyr_MunicpiosdaRegio3_2.set('fieldImages', {'CD_MUN': 'TextEdit', 'NM_MUN': 'TextEdit', 'CD_RGI': 'TextEdit', 'NM_RGI': 'TextEdit', 'CD_RGINT': 'TextEdit', 'NM_RGINT': 'TextEdit', 'CD_UF': 'TextEdit', 'NM_UF': 'TextEdit', 'SIGLA_UF': 'TextEdit', 'CD_REGIA': 'TextEdit', 'NM_REGIA': 'TextEdit', 'SIGLA_RG': 'TextEdit', 'CD_CONCU': 'TextEdit', 'NM_CONCU': 'TextEdit', 'AREA_KM2': 'TextEdit', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.set('fieldImages', {'fid': 'TextEdit', 'Município': 'TextEdit', 'Comunidade': 'TextEdit', 'SEGMENTO': 'TextEdit', 'ID_C': 'TextEdit', 'Area(m)': 'TextEdit', 'Distância do rompimento': 'TextEdit', 'Distância do rio Paraopeba/Três Marias': 'TextEdit', 'População da comunidade': 'Range', 'Sociabilidade: danos que prejudicam as relações interpessoais, familiares e comunitárias ': 'Range', 'Patrimônio Cultural e Cultura: Danos que afetam o patrimônio e as manifestações culturais locais': 'Range', 'Lazer: Danos que reduzem o acesso ao lazer': 'Range', 'Educação: Danos que dificultam o acesso à educação e prejudicam as condições de ensino': 'Range', 'Mobilidade: danos que impactam o transporte e circulação': 'Range', 'Modos de vida: danos aos projetos,  modos e qualidade de vida': 'Range', 'Infraestrutura: Danos que impactam negativamento o acesso e uso de infraestruturas básicas': 'Range', 'Saúde: danos que dificultam o tratamento e agravam as condições de saúde física e mental ': 'Range', 'Água: Danos associados à perda ou diminuição do acesso água': 'Range', 'Alimentação: Danos associados à redução da oferta ou da produção de alimentos': 'Range', 'Economia tradicional: danos aos bens, posses e atividades econômicas tradicionais': 'Range', 'Socioassistência: danos que agravam vunerabilidades e dificultam o acesso à serviços e direitos socioassistenciais': 'Range', 'Turismo: danos que reduzem as oportunidades e benefícios do turismo': 'Range', 'Trabalho: danos que prejudicam as oportunidades e condições de trabalho': 'Range', 'Produção: danos associados à perda ou restrição da produção agrícola, agropecuária e extrativista': 'Range', 'Atividade Econômica: Danos que impactam negativamente o comércio e a economia local': 'Range', 'Moradia: Danos que reduzem e dificultam as condições de moradia e habitabilidade de comunidades urbanas e rurais': 'Range', });
lyr_RioParaopeba_4.set('fieldImages', {'Source': 'TextEdit', 'GEOCODIGO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'UF': 'TextEdit', 'CD_UF': 'TextEdit', 'HIDRO': 'TextEdit', 'AREA_HA': 'TextEdit', });
lyr_MunicpiosdaRegio3_2.set('fieldLabels', {'CD_MUN': 'hidden field', 'NM_MUN': 'no label', 'CD_RGI': 'hidden field', 'NM_RGI': 'hidden field', 'CD_RGINT': 'hidden field', 'NM_RGINT': 'hidden field', 'CD_UF': 'hidden field', 'NM_UF': 'hidden field', 'SIGLA_UF': 'hidden field', 'CD_REGIA': 'hidden field', 'NM_REGIA': 'hidden field', 'SIGLA_RG': 'hidden field', 'CD_CONCU': 'hidden field', 'NM_CONCU': 'hidden field', 'AREA_KM2': 'hidden field', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.set('fieldLabels', {'fid': 'hidden field', 'Município': 'inline label - visible with data', 'Comunidade': 'inline label - visible with data', 'SEGMENTO': 'inline label - visible with data', 'ID_C': 'inline label - visible with data', 'Area(m)': 'inline label - visible with data', 'Distância do rompimento': 'inline label - visible with data', 'Distância do rio Paraopeba/Três Marias': 'inline label - visible with data', 'População da comunidade': 'inline label - visible with data', 'Sociabilidade: danos que prejudicam as relações interpessoais, familiares e comunitárias ': 'inline label - visible with data', 'Patrimônio Cultural e Cultura: Danos que afetam o patrimônio e as manifestações culturais locais': 'inline label - visible with data', 'Lazer: Danos que reduzem o acesso ao lazer': 'inline label - visible with data', 'Educação: Danos que dificultam o acesso à educação e prejudicam as condições de ensino': 'inline label - visible with data', 'Mobilidade: danos que impactam o transporte e circulação': 'inline label - visible with data', 'Modos de vida: danos aos projetos,  modos e qualidade de vida': 'inline label - visible with data', 'Infraestrutura: Danos que impactam negativamento o acesso e uso de infraestruturas básicas': 'inline label - visible with data', 'Saúde: danos que dificultam o tratamento e agravam as condições de saúde física e mental ': 'inline label - visible with data', 'Água: Danos associados à perda ou diminuição do acesso água': 'inline label - visible with data', 'Alimentação: Danos associados à redução da oferta ou da produção de alimentos': 'inline label - visible with data', 'Economia tradicional: danos aos bens, posses e atividades econômicas tradicionais': 'inline label - visible with data', 'Socioassistência: danos que agravam vunerabilidades e dificultam o acesso à serviços e direitos socioassistenciais': 'inline label - visible with data', 'Turismo: danos que reduzem as oportunidades e benefícios do turismo': 'inline label - visible with data', 'Trabalho: danos que prejudicam as oportunidades e condições de trabalho': 'inline label - visible with data', 'Produção: danos associados à perda ou restrição da produção agrícola, agropecuária e extrativista': 'inline label - visible with data', 'Atividade Econômica: Danos que impactam negativamente o comércio e a economia local': 'inline label - visible with data', 'Moradia: Danos que reduzem e dificultam as condições de moradia e habitabilidade de comunidades urbanas e rurais': 'inline label - visible with data', });
lyr_RioParaopeba_4.set('fieldLabels', {'Source': 'inline label - visible with data', 'GEOCODIGO': 'inline label - visible with data', 'MUNICIPIO': 'inline label - visible with data', 'UF': 'inline label - visible with data', 'CD_UF': 'inline label - visible with data', 'HIDRO': 'inline label - visible with data', 'AREA_HA': 'inline label - visible with data', });
lyr_RioParaopeba_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});