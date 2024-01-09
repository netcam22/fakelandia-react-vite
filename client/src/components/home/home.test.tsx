import { describe, it, expect, beforeEach, afterEach, vi} from 'vitest';

describe('test date is rendered correctly on home page', () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
	}) 
	it('converts date to string as expected', () => {
	const date = new Date(2024, 0, 7);
	vi.setSystemTime(date);
	const dateString = date.toDateString();

	expect(dateString).toEqual("Sun Jan 07 2024");
	});
})