import { character } from '../app';
test('healthy check', () => {
	const characters = [
		{name: 'Маг', health: 90}
	]
	const result = character(characters)
	expect(result).toBe('healthy')
})

test('wounded check', () => {
	const characters = [
		{name: 'Мечник', health: 40}
	]
	const result = character(characters)
	expect(result).toBe('wounded')
})

test('critical check', () => {
	const characters = [
		{name: 'Лучник', health: 10}
	]
	const result = character(characters)
	expect(result).toBe('critical')
})