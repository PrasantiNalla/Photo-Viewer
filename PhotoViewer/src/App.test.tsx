import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Title', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/React Photo Viewer/i);
    expect(textElement).toBeInTheDocument();
});

//1. A unit test to check our imageUrl generation code - for me,
//this might check that the first link is what I expect and that it doesn’t include the ‘broken’ images.
test('renders subtitle', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Select a image to preview/i);
    expect(textElement).toBeInTheDocument();
});
//2. A ‘Regression / Snapshot' test to confirm that I the ‘ImageViewer' component doesn’t accidentally change in the future
test('renders subtitle', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Select a image to preview/i);
    expect(textElement).toBeInTheDocument();
});
//3. A Component Test to confirm that when I click a thumbnail,
//then the thumbnail becomes selected and the ImageViewer updates with the new image.
test('renders subtitle', () => {
    const { getByText } = render(<App />);
    const textElement = getByText(/Select a image to preview/i);
    expect(textElement).toBeInTheDocument();
});