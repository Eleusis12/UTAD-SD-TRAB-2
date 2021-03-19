/**
 * @param {float[3]} rightVector Array de direita da câmera
 * @param {float[3]} upVector Array de Cima da câmara
 * @param {float[3]} forwardVector Array da frente da Câmara
 * @param {float[3]} centerPoint Array com a posição da câmara em coordenadas mundo
 */

function MatrizDeVisualizacao(rightVector, upVector, forwardVector, centerPoint) {
    return [
        [rightVector[0], rightVector[1], rightVector[2], -math.multiply(rightVector, centerPoint)],
        [upVector[0], upVector[1], upVector[2], -math.multiply(upVector, centerPoint)],
        [forwardVector[0], forwardVector[1], forwardVector[2], -math.multiply(forwardVector, centerPoint)],
        [0, 0, 0, 1]

    ]

}

/**
 * Função que devolve a matriz de projecção Ortográfica
 * @param {float} width Comprimento a renderizar
 * @param {float} height Altura a renderizar
 * @param {float} nearPlane Planod de Cortre anterior da câmara
 * @param {float} farPlane Plano de corte posterior da câmara
 */


function MatrizOrtografica(width, height, nearPlane, farPlane) {
    var matrizOrtografica = [
        [1 / width, 0, 0, 0],
        [0, 1 / height, 0, 0],
        [0, 0, 1 / ((farPlane / 2) - nearPlane), -nearPlane / ((farPlane / 2) - nearPlane)],
        [0, 0, 0, 1]

    ]

    return math.multiply(matrizOrtografica, CriarMatrizTranslacao(0, 0, -(nearPlane + farPlane / 2)));

}

/**
 * Função que devolve a matriz de projecção em perspetiva
 * @param {float} distance Distância do centro que a imagem deve ser renderizada
 * @param {float} width Comprimento a renderizar
 * @param {float} height Altura a renderizar
 * @param {float} nearPlane Planod de Cortre anterior da câmara
 * @param {float} farPlane Plano de corte posterior da câmara
 */


function MatrizPerspetiva(distance, width, height, nearPlane, farPlane) {
    return [
        [distance / width, 0, 0, 0],
        [0, distance / height, 0, 0],
        [0, 0, farPlane / (farPlane - nearPlane), -nearPlane * farPlane / (farPlane - nearPlane)],
        [0, 0, 1, 0]

    ]

}

/**
 * Função que devolve a matriz de ViewPort
 * @param {float} minX Valor Mínimo do volume canónico no eixo do x
 * @param {float} maxX Valor Máximo do volume canónico no eixo do x
 * @param {float} minY Valor Mínimo do volume canónico no eixo do Y
 * @param {float} maxY Valor Máximo do volume canónico no eixo do Y
 */


function MatrizViewPort(minX, maxX, minY, maxY) {
    return [
        [(maxX - minX) / 2, 0, 0, (maxX + minX) / 2],
        [0, (maxY - minY) / 2, 0, (maxY + minY) / 2],
        [0, 0, 1, 0],
        [0, 0, 0, 1]

    ]

}