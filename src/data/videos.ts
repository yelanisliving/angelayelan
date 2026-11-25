import photoOne from '../../photography/photo-01.jpg';
import photoTwo from '../../photography/photo-02.jpg';
import photoThree from '../../photography/photo-03.jpg';

export const videos = [
  {
    title: 'My first video',
    note: '2025 east coast trip: visiting universities and exploring cities! reflected on my dreams and where i strived to be.',
    youtubeId: 'https://youtu.be/Nj_KMNpi_7k?si=jeaK14Zka-eEq4ow',
  },
  {
    title: 'My second video',
    note: 'class of 2026 senior homecoming week.\nlast one, best one!',
    youtubeId: 'https://youtu.be/Ao9-6jUB_2Y?si=lMmInb9p5OhWh87y',
  },
  {
    title: 'Video 03',
    note: "a collaboration with Fremont's school district, promoting the city's first ever film festival for K-12 students :)",
    youtubeId: 'https://youtu.be/lrCOHAAABgw?si=IqMX5a4WztG1hoT3',
  },
  {
    title: 'Video 04',
    note: 'to goodbyes and new memories \nour solo trip to marlborough and boston.',
    youtubeId: 'https://youtu.be/RZgmVV2aQp4?si=xP4LGPxIRfwoMV0l',
  },
  {
    title: 'Video 05',
    note: 'collab w/ USA Badminton: recapping one of the largest national tournaments',
    youtubeId: 'https://youtu.be/r2OfA5b0bh8?si=xZTS1iE_zCSn-cvE',
  },
  {
    title: 'Video 06',
    note: 'a matcha everyday helps your happiness stay 🍵',
    youtubeId: 'https://youtu.be/9TA5ekOYD3g?si=pE7k4G3BR23Gc1YH',
  },
  {
    title: 'Video 07',
    note: 'moments from summer 2025: slow shutter speed edition',
    youtubeId: 'https://youtu.be/EIykEJbLMFQ?si=JW0v2GU0aW1wfYvD',
  },
  {
    title: 'Video 08',
    note: 'homecoming week recap video i made during my junior year!',
    youtubeId: 'https://youtu.be/M8HhWG13qug?si=U478Mb96GkqnfK_a',
  },
  {
    title: 'Video 09',
    note: "a teacher's lip dub video i edited that was played in front of the whole school \nduring our winter rally",
    youtubeId: 'https://youtu.be/oiCjqrA6pwo?si=pWIcapxjPbXGB4be',
  },
  {
    title: 'Video 10',
    note: "my peers' reflections about how it feels being in their last \nyear of high school during senior sunrise",
    youtubeId: 'https://youtu.be/wjjReMFAmfM?si=vuhLGS08QhBNKWtE',
  },
  {
    title: 'Video 11',
    note: 'my first project officially working with color grading techniques',
    youtubeId: 'https://youtu.be/Zf-xnmgCpEM?si=_JAfF6FkMNNR7KkO',
  },
  {
    title: 'Video 12',
    note: 'collab w/ USA Badminton: recapping one of the largest national tournaments',
    youtubeId: 'https://youtu.be/QDN5XsE6tLw?si=J407Bcstlmfp5Hmf',
  },
  {
    title: 'Video 13',
    note: 'a bittersweet video for the graduating seniors in my badminton club :)',
    youtubeId: 'https://youtu.be/MGEcUETFtkI?si=flhXlXTl0iEFV1eA',
  },
  {
    title: 'Video 14',
    note: 'a promise & love to san francisco',
    youtubeId: 'https://youtu.be/-iKIwxtDRzs',
  },
];

export const photos = [
  {
    src: photoOne.src,
    alt: 'Describe what appears in the first photograph',
  },
  {
    src: photoTwo.src,
    alt: 'Describe what appears in the second photograph',
  },
  {
    src: photoThree.src,
    alt: 'Describe what appears in the third photograph',
  },
];

export const getYouTubeId = (value: string) => {
  if (value === 'VIDEO_ID_HERE') return null;

  try {
    const url = new URL(value);

    if (url.hostname.includes('youtu.be')) return url.pathname.split('/')[1];
    if (url.pathname.startsWith('/shorts/') || url.pathname.startsWith('/embed/')) {
      return url.pathname.split('/')[2];
    }

    return url.searchParams.get('v');
  } catch {
    return value;
  }
};
