import { Magician, Daemon } from "../index";

describe("Приверка классов", () => {
    test('Magician attack without stoned', () => {
        const mag = new Magician('Merlin');
        mag.attack = 100;
        mag.distance = 2;
        expect(mag.attack).toBe(90);
    });

    test('Magician attack with stoned', () => {
        const mag = new Magician('Merlin');
        mag.attack = 100;
        mag.distance = 2;
        mag.stoned = true;
        // 100 * 0.9 - log2(2)*5 = 90 - 5 = 85
        expect(mag.attack).toBe(85);
    });

    test('Daemon attack without stoned', () => {
        const d = new Daemon('Azazel');
        d.attack = 120;
        d.distance = 3;
        // 120 * 0.8 = 96
        expect(d.attack).toBe(96);
    });

    test('Daemon attack with stoned', () => {
        const d = new Daemon('Azazel');
        d.attack = 120;
        d.distance = 3;
        d.stoned = true;
        // 120*0.8 - log2(3)*5 ≈ 96 - 7.9248 = 88
        expect(d.attack).toBe(88);
    });

    test('attack cannot go below zero', () => {
        const mag = new Magician('Merlin');
        mag.attack = 10;
        mag.distance = 5;
        mag.stoned = true;
        expect(mag.attack).toBe(0);
    });

    test('stoned setter/getter works correctly', () => {
        const mag = new Magician('Merlin');
        mag.stoned = true;
        expect(mag.stoned).toBe(true);
        mag.stoned = false;
        expect(mag.stoned).toBe(false);
    });

    test('attack setter/getter works correctly', () => {
        const d = new Daemon('Azazel');
        d.attack = 150;
        expect(d.baseAttack).toBe(150); // проверяем что сеттер сохранил
        d.distance = 1;
        expect(d.attack).toBe(150); // проверяем что геттер возвращает baseAttack на 1-й клетке
    });
});