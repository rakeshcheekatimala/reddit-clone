import React, { Component } from 'react';
import { abbreviateNumber } from './../';
describe('Utils', () => {
    it('abbreviated Number format for the given input to return with K ', () => {
        const result = abbreviateNumber(9000);
        expect(result).toBe("9.0k")
    });

    it('abbreviated Number format for the given input to return with M ', () => {
        const result = abbreviateNumber(9100000);
        expect(result).toBe("9.1M")
    });

})