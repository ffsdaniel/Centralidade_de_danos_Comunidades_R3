var size = 0;
var placement = 'point';
var selectedCategory = '';

// Paleta de cores personalizada para centralidade (1-5)
var centralityColors = [
    '#ffffb2', // 1
    '#fecc5c', // 2  
    '#fd8d3c', // 3
    '#f03b20', // 4
    '#bd0026'  // 5
];

// Função para gerar cor turbo mais suave para população
function getTurboColor(t, opacity) {
    opacity = opacity || 1.0;
    var r, g, b;
    
    t = Math.max(0, Math.min(1, t));
    
    if (t < 0.25) {
        r = Math.round(50 + 155 * (t / 0.25)); 
        g = Math.round(100 + 155 * (t / 0.25));
        b = 200;
    } else if (t < 0.5) {
        r = Math.round(50 + 100 * ((t - 0.25) / 0.25));
        g = 200;
        b = Math.round(200 - 100 * ((t - 0.25) / 0.25));
    } else if (t < 0.75) {
        r = Math.round(150 + 80 * ((t - 0.5) / 0.25));
        g = Math.round(200 - 50 * ((t - 0.5) / 0.25));
        b = Math.round(100 - 80 * ((t - 0.5) / 0.25));
    } else {
        r = Math.round(230 - 30 * ((t - 0.75) / 0.25));
        g = Math.round(150 - 100 * ((t - 0.75) / 0.25));
        b = Math.round(20 + 30 * ((t - 0.75) / 0.25));
    }
    
    return `rgba(${r},${g},${b},${opacity})`;
}

// Função para converter hex para rgba
function hexToRgba(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    
    return `rgba(${r},${g},${b},${alpha})`;
}

// Função para obter valores mín/máx para normalização da população
function getPopulationMinMax() {
    // Você deve ajustar esses valores baseado nos seus dados reais
    // Examine os dados para definir valores apropriados
    return {
        min: 50,    // menor valor de população nos seus dados
        max: 3000   // maior valor de população nos seus dados
    };
}

// Função para obter cor baseada no valor e tipo de categoria
function getCategoryColor(value, category) {
    if (!value || value === null || value === undefined || value === '') {
        return 'rgba(200,200,200,0.7)';
    }
    
    // População (dado contínuo) - paleta turbo suave com 70% opacidade
    if (category === 'População da comunidade') {
        var normalized = parseFloat(value);
        if (isNaN(normalized)) return 'rgba(200,200,200,0.7)';
        
        var minMax = getPopulationMinMax();
        
        // Normalização corrigida
        normalized = (normalized - minMax.min) / (minMax.max - minMax.min);
        normalized = Math.max(0, Math.min(1, normalized));
        
        return getTurboColor(normalized, 0.7);
    }
    // Todas as outras categorias (centralidade 1-5) - nova paleta
    else {
        var val = parseInt(value);
        if (isNaN(val)) {
            val = 1; // valor padrão
        }
        if (val < 1) val = 1;
        if (val > 5) val = 5;
        
        var colorHex = centralityColors[val - 1];
        return hexToRgba(colorHex, 0.7);
    }
}

// Função para criar legenda
function createLegend(category) {
    var legendDiv = document.getElementById('legend');
    if (!legendDiv) return;
    
    legendDiv.innerHTML = '';
    
    if (!category) {
        legendDiv.classList.remove('show');
        return;
    }
    
    legendDiv.classList.add('show');
    legendDiv.innerHTML = '<strong>Legenda:</strong><br>';
    
    if (category === 'População da comunidade') {
        // Legenda para população (contínua)
        legendDiv.innerHTML += '<em>População</em><br>';
        var minMax = getPopulationMinMax();
        
        for (var i = 0; i <= 4; i++) {
            var t = i / 4;
            var color = getTurboColor(t, 0.7);
            var populationValue = Math.round(minMax.min + t * (minMax.max - minMax.min));
            var label = i === 0 ? `${minMax.min} hab` : i === 4 ? `${minMax.max} hab` : `${populationValue} hab`;
            legendDiv.innerHTML += `<div class="legend-item"><div class="legend-color" style="background-color: ${color}"></div><span class="legend-text">${label}</span></div>`;
        }
    } else {
        // Legenda para escala de centralidade (1-5)
        legendDiv.innerHTML += '<em>Centralidade</em><br>';
        for (var i = 1; i <= 5; i++) {
            var colorHex = centralityColors[i - 1];
            var color = hexToRgba(colorHex, 0.7);
            legendDiv.innerHTML += `<div class="legend-item"><div class="legend-color" style="background-color: ${color}"></div><span class="legend-text">Nível ${i}</span></div>`;
        }
    }
}

var style_Categorias_Danos_populacao_distanciasarquivo_de_sada_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    
    // Cor padrão
    var fillColor = 'rgba(204,204,204,1.0)';
    
    // Se há uma categoria selecionada, usar a cor baseada no valor
    if (selectedCategory && selectedCategory !== '') {
        var value = feature.get(selectedCategory);
        if (value !== null && value !== undefined && value !== '') {
            fillColor = getCategoryColor(value, selectedCategory);
            
            // Debug: log do primeiro feature para verificar os dados
            if (typeof window.debugCounter === 'undefined') {
                window.debugCounter = 0;
            }
            if (window.debugCounter < 3) {
                console.log('Categoria: ' + selectedCategory + ', Valor: "' + value + '", Cor: ' + fillColor);
                window.debugCounter++;
            }
        }
    }
    
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(82,82,82,1.0)', 
            lineDash: null, 
            lineCap: 'butt', 
            lineJoin: 'miter', 
            width: 0.988
        }),
        fill: new ol.style.Fill({
            color: fillColor
        }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};

// Event listener que deve ser executado após o carregamento da página
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var select = document.getElementById('category-select');
        if (select) {
            select.addEventListener('change', function() {
                selectedCategory = this.value;
                createLegend(selectedCategory);
                
                // Reset debug counter
                window.debugCounter = 0;
                
                // Força redesenho da camada
                if (typeof lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3 !== 'undefined') {
                    lyr_Categorias_Danos_populacao_distanciasarquivo_de_sada_3.getSource().changed();
                }
            });
        }
    }, 1000);
});