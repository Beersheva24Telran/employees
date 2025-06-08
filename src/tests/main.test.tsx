import { it, expect, describe } from 'vitest';
import {render, screen} from '@testing-library/react';
describe('setup testing', () => {
    it('should render simple <div>', () => {
        
        render(<div>Test</div>);
        screen.debug(undefined, Infinity)
        expect(screen.getByText(/test/i))
    })
})