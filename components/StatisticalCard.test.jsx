import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import this line
import StatisticalCard from './StatisticalCard';

test('renders title and count correctly', () => {
  const mockProps = {
    imageSrc: '<div>Mock Image</div>',
    title: 'Mock Title',
    count: 42,
    backgroundColor: 'bg-blue-300', // Add the actual background color class here
  };

  const { getByText } = render(<StatisticalCard {...mockProps} />);

  const titleElement = getByText(mockProps.title);
  const countElement = getByText(mockProps.count.toString());

  expect(titleElement).toBeInTheDocument();
  expect(countElement).toBeInTheDocument();
});
