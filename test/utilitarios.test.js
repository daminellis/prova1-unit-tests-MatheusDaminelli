const Utilitarios = require('../src/utilitarios');

describe('Testes da classe Utilitarios', () => {
    let util;

    beforeEach(() => {
        util = new Utilitarios();
    });

    test('inverte a string', () => {
        expect(util.inverterString('abc')).toBe('cba');
    });

    test('conta caracter', () => {
        expect(util.contarCaracteres('abc')).toBe(3);
    });

    test('converter para maiúsculas', () => {
        expect(util.paraMaiusculas('abc')).toBe('ABC');
    });

    test('converter para minúsculas', () => {
        expect(util.paraMinusculas('ABC')).toBe('abc');
    });

    test('deixa a primeira letra maiúscula', () => {
        expect(util.primeiraLetraMaiuscula('abc')).toBe('Abc');
    });

    test('somar dois números', () => {
        expect(util.somar(10, 10)).toBe(20);
    });

    test('subtrair dois números', () => {
        expect(util.subtrair(10, 10)).toBe(0);
    });

    test('multiplicar dois números', () => {
        expect(util.multiplicar(10, 10)).toBe(100);
    });

    test('dividir dois números', () => {
        expect(util.dividir(10, 10)).toBe(1);
    });

    test('retorna true para número par', () => {
        expect(util.ehPar(4)).toBe(true);
    });

    test('retornar false para número ímpar', () => {
        expect(util.ehPar(5)).toBe(false);
    });

    test('retorna o primeiro elemento do array', () => {
        expect(util.primeiroElemento([1, 2, 3])).toBe(1);
    });

    test('retorna o último elemento do array', () => {
        expect(util.ultimoElemento([1, 2, 3])).toBe(3);
    });

    test('retorna o tamanho do array', () => {
        expect(util.tamanhoArray([1, 2, 3])).toBe(3);
    });

    test('ordena o array', () => {
        expect(util.ordenarArray([3, 1, 2])).toEqual([1, 2, 3]);
    });

    test('inverte o array', () => {
        expect(util.inverterArray([1, 2, 3])).toEqual([3, 2, 1]);
    });

    test('retorna true para número', () => {
        expect(util.ehNumero(5)).toBe(true);
    });

    test('retornar false para string', () => {
        expect(util.ehNumero('5')).toBe(false);
    });

    test('remover espaços das extremidades', () => {
        expect(util.removerEspacos('  abc  ')).toBe('abc');
    });

    test('repete o texto', () => {
        expect(util.repetirTexto('a', 3)).toBe('aaa');
    });

    test('junta os elementos do array', () => {
        expect(util.juntarArray([1, 2, 3], '-')).toBe('1-2-3');
    });

    test('conta as palavras', () => {
        expect(util.contarPalavras('um dois três')).toBe(3);
    });

    test('calcula média', () => {
        expect(util.mediaArray([1, 2, 3])).toBe(2);
    });

    test('retornar 0 para um array vazio', () => {
        expect(util.mediaArray([])).toBe(0);
    });

    test('remove elementos duplicados', () => {
        expect(util.removerDuplicados([1, 2, 2, 3])).toEqual([1, 2, 3]);
    });

    test('mescla dois objetos', () => {
        expect(util.mesclarObjetos({ a: 1 }, { b: 2 })).toEqual({ a: 1, b: 2 });
    });
});
