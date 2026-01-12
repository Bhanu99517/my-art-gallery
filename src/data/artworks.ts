export interface Artwork {
  id: string;
  title: string;
  category: 'portraits' | 'drawings' | 'landscapes' | 'abstract';
  year: string;
  medium: string;
  dimensions: string;
  image: string;
  description: string;
}

export const artworks: Artwork[] = [
  {
    id: '1',
    title: 'Budhs',
    category: 'portraits',
    year: '2023',
    medium: 'graphite on paper',
    dimensions: '297" × 210"',
    image: '/artwork-1.jpg',
    description: 'A contemporary portrait exploring the interplay of light and shadow, capturing a moment of quiet contemplation.'
  },
  {
    id: '2',
    title: 'Dog',
    category: 'portraits',
    year: '2022',
    medium: 'graphite on paper',
    dimensions: '297" × 210"',
    image: '/artwork-2.jpg',
    description: 'An intimate study of human connection through intertwined hands, rendered in expressive charcoal strokes.'
  },
  {
    id: '3',
    title: 'Lod Krishna',
    category: 'portraits',
    year: '2022',
    medium: 'colorpencil',
    dimensions: '297" × 210"',
    image: '/artwork-3.jpg',
    description: 'Misty mountain landscape bathed in the warm glow of sunset, capturing the ethereal beauty of nature.'
  },
  {
    id: '4',
    title: 'Girl',
    category: 'portraits',
    year: '2022',
    medium: 'Graphite on Paper',
    dimensions: '297" × 210"',
    image: '/artwork-4.jpg',
    description: 'A detailed pencil portrait study exploring character and the passage of time through careful observation.'
  },
  {
    id: '5',
    title: 'Albert Einstein',
    category: 'portraits',
    year: '2022',
    medium: 'Ink on Paper',
    dimensions: '297" × 210"',
    image: '/artwork-5.jpg',
    description: 'Bold abstract composition featuring gold leaf accents against deep burgundy and charcoal, exploring themes of transformation.'
  },
  {
    id: '6',
    title: 'Shivaji',
    category: 'portraits',
    year: '2022',
    medium: 'Graphite on Paper',
    dimensions: '297" × 210"',
    image: '/artwork-6.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '7',
    title: 'Mother Teresa',
    category: 'portraits',
    year: '2022',
    medium: 'Graphite on Paper',
    dimensions: '297" × 210"',
    image: '/artwork-7.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '8',
    title: 'Hrithik Roshan',
    category: 'portraits',
    year: '2022',
    medium: 'Graphite on Paper',
    dimensions: '297" × 210"',
    image: '/artwork-8.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '9',
    title: 'APJ Abdul Kalam',
    category: 'drawings',
    year: '2022',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-9.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '10',
    title: 'lord Krishna',
    category: 'drawings',
    year: '2022',
    medium: 'colour on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-10.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '11',
    title: 'Bruce Lee',
    category: 'drawings',
    year: '2022',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-11.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '12',
    title: 'Bruce Lee',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-12.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '13',
    title: 'Virat Kohli',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-13.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '14',
    title: 'Mother Teresa',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-14.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '15',
    title: 'Tom and Jerry',
    category: 'drawings',
    year: '2024',
    medium: 'Colour on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-15.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '16',
    title: 'Dr.Sarvepalli Radhakrishnan',
    category: 'portraits',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-16.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '17',
    title: 'Bruce Lee',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-17.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '18',
    title: 'Eye',
    category: 'drawings',
    year: '2024',
    medium: 'Ink on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-18.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '19',
    title: 'Loard Shiva',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-19.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '20',
    title: 'Sai Baba',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-20.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '21',
    title: 'Boy',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-21.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '22',
    title: 'Boy',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-22.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '23',
    title: 'My Father',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-23.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '24',
    title: 'Friend',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-24.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '25',
    title: 'commissioned Portrait',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-25.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '26',
    title: 'School Teacher',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-26.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '27',
    title: 'Spider man',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-27.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '28',
    title: 'Harry potter',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-28.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '29',
    title: 'Dog',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-29.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  },
  {
    id: '30',
    title: 'Flower',
    category: 'drawings',
    year: '2024',
    medium: 'Graphite on Paper',
    dimensions: '12" × 15"',
    image: '/artwork-30.jpg',
    description: 'Delicate botanical study inspired by Asian brush painting traditions, celebrating the beauty of simplicity.'
  }
];

export const categories = [
  { id: 'all', label: 'All Works' },
  { id: 'portraits', label: 'Portraits' },
  { id: 'drawings', label: 'Drawings' },
  { id: 'landscapes', label: 'Landscapes' },
  { id: 'abstract', label: 'Abstract' }
] as const;


